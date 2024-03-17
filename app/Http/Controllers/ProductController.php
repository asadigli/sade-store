<?php

namespace App\Http\Controllers;
use Storage;
use Illuminate\Http\Request;
use App\Http\Requests;
use DB;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use App\Category;
use App\Subcat;
use App\ProductDetails;
use App\User;
use App\Message;
use App\Star;
use App\Seodesc;
use App\Seotag;
use App\View;

class ProductController extends Controller
{

  // public function getData(){
  //   $productdetails = ProductDetails::all();
  //   $category = Category::all();
  //   $subcat = Subcat::all();
  //   return view('admin.form', ['productdetails' => $productdetails], ['category' => $category], ['subcat' => $subcat]);
  // }
  // public function getbyajax(){
  //   $category = Category::all();
  //   $subcat = Subcat::all();
  //   return view('admin.form');
  // }
  // public function getdatabyajax(Request $request){
  //   $data = Subcat::select('name', 'id')->where('parent_id', $request->id)->take(100)->get();
  //   return response()->json($data);
  // }
  public function displaydataredirecttourl($id){
    $pro = ProductDetails::find($id);
    return redirect()->to('product-details/'.$pro->slug);
  }
  public function displaydata($slug,$lang =null){
    if (!in_array($lang,config("settings.languages"))) {$lang='az';}
    app()->setLocale($lang);
    $pro = DB::table('productdetails')->where('slug', $slug)->first();
    $category = Category::where('id',$pro->category_id)->first();
    $subcat = Subcat::where('id',$pro->subcat_id)->first();
      $pr = ProductDetails::where('id',$pro->id)->first();
      $pr->view += 1;
      $pr->update();
    $seods = Seodesc::where('product_id',$pro->id)->get();
    $seots = Seotag::where('product_id',$pro->id)->get();
    $user = User::all();
    $curl = curl_init();
      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://sade.asgro.org/api/get-product-details/".md5(date("d-M-Y")."999").md5(date("Y-m-d")."111"),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "accept: application/json"
        ),
      ));
      curl_setopt($curl, CURLOPT_VERBOSE, true);
      curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
      $res = curl_exec($curl);
      $response = json_decode($res,true);
      $err = curl_error($curl);
      curl_close($curl);
      if ($err) {
        echo "cURL Error #:" . $err;
      } else {
          foreach ($response as $ke => $p) {
            if ($pro->main_id == $p['pro_id']) {
              $pro = ProductDetails::where('main_id',$pro->main_id)->first();
              $pro->quantity = $p['quantity'];
              $pro->discount = $pro->price - $p['price'];
              $pro->update();
            }
          }
      }
    return view('product_details',compact('subcat','category','pro','user','seods','seots'));
  }
  // public function showproducts(){
  //   $productdetails = ProductDetails::orderBy('created_at','desc')->get();
  //   $user = User::all();
  //   return view('admin.productlist', ['productdetails' => $productdetails], ['user' => $user]);
  // }
  // public function deletecategory($id){
  //   DB::table('category')->where('id',$id)->delete();
  //   DB::table('subcat')->where('id',$id)->delete();
  //   return redirect()->back()->with('successmessage_category','Category successfully deleted!');
  // }
  // public function categoryedit(Request $req, $id){
  //   $cat = Category::find($id);
  //   $cat->name = $req->name;
  //   $cat->update();
  //   return redirect()->back()->with('category_edited','You have edited category.');
  // }
  // public function deletesubcat($id){
  //   DB::table('subcat')->where('id',$id)->delete();
  //   return redirect()->back()->with('successmessage_subcat','SubCategory successfully deleted!');
  // }
  // public function deleteproduct($id){
  //     DB::table('productdetails')->where('id',$id)->delete();
  //     return redirect()->back()->with('productdeleted','Product successfully deleted!')->with('user_productdeleted','Product successfully deleted!');
  // }

  // public function editproduct($id){
  //   $productdetails = productdetails::find($id);
  //   return view('admin.editproduct',compact('productdetails'));
  // }
  // public function givestar(Request $request){
  //   $star = new Star;
  //   // $star['created_at'] = new \DateTime();
  //   $star->user_id=$request->user_id;
  //   $star->product_id=$request->product_id;
  //   $star->seller_id=$request->seller_id;
  //   $star->stars=$request->stars;
  //   $star->save();
  //   return redirect()->back();
  //   // $request->user()->productdetails()->save($star);
  // }
  // public function changestar(Request $request, $user_id){
  //   $star = Star::find($user_id);
  //   $star->stars = $request->stars;
  //   $star->update();
  //   return redirect()->back()->with('editedstar','You have changed your post.');
  // }
}
