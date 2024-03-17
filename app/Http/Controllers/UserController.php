<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Category;
use App\Subcat;
use App\ProductDetails;
use Image;
use Auth;
use App\HelpDesk;
use App\Helpdesklist;
use App\Wishlist;
use Storage;
use App\Newscomment;
use Lang;
use App\Sales;
use DB;
use Session;
class UserController extends Controller
{
      public function myaccount($lang = null){
        if (!in_array($lang,config("settings.languages"))) {$lang='az';}
        app()->setLocale($lang);
        $token = Auth::user()->access_token;
        if (Auth::user()->mobile_verification == 1) {
          $curl = curl_init();
          curl_setopt_array($curl, array(
            CURLOPT_URL => "https://sade.asgro.org/api/get-my-products?token=".$token,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array("accept: application/json"),
          ));
          curl_setopt($curl, CURLOPT_VERBOSE, true);
          curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE);
          curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
          $res = curl_exec($curl);
          $response = json_decode($res,true);
          $err = curl_error($curl);
          curl_close($curl);
          if ($err) {echo "Error #:" . $err;} else {
            foreach ($response as $key => $value) {
              if (($value['real_price'] - $value['sold_price']) > 0){$dis = $value['real_price'] - $value['sold_price'];}else{$dis = 0;}
              $pp = ProductDetails::where('main_id',$value['product_id'])->first();
              $exist = Sales::where('sale_id',$value['id'])->first();
              if (empty($exist)) {
                $sls = new Sales;
                $sls->user_id = Auth::user()->id;
                $sls->sale_id = $value['id'];
                $sls->date = \Carbon\Carbon::parse($value['date'])->format("Y-m-d H:i:s");
                $sls->quantity = $value['quantity'];
                $sls->price = $value['real_price'];
                $sls->phone_number = $value['number'];
                $sls->ss_point = $value['ss_point'];
                $sls->discount = $dis;
                $sls->buyer_name = "--";
                $sls->product_id = $value['product_id'];
                $sls->save();
              }
            }
          }
        }
        return view('myaccount');
      }
      public function wishlist_sum(Request $req){
        $sm = 0;
        $pros = DB::table('productdetails')
                    ->join('wishlist', 'wishlist.product_id', '=', 'productdetails.id')
                    ->select('productdetails.price as price','wishlist.user_id','productdetails.discount','wishlist.quantity')
                    ->where('wishlist.user_id',Auth::user()->id)->get();
        foreach ($pros as $key => $pro) {$sm += ($pro->price - $pro->discount)*$pro->quantity;}
        if(empty(Session::get('difference'))){$res = number_format($sm,2)."AZN";
        }else{$res = number_format($sm / Session::get('difference'),2).Session::get('currency');}
        return $res;
      }
      public function get_details(Request $req){
        $sls = DB::table('sales')->select('sales.*','productdetails.productname as pro_name','productdetails.slug as pro_slug')
                  ->leftJoin('productdetails','productdetails.main_id','=','sales.product_id')
                  ->where('sales.id',$req->id)->first();
        if ($sls->user_id = Auth::user()->id) {return response()->json($sls);}
      }
      public function deletewishlist($id){
        if (Auth::check()) {
          $ws = Wishlist::find($id);
          if ($ws->user_id == Auth::user()->id) {$ws->delete();}
        }
        return response()->json(['success' => Lang::get('app.Removed_wishlist_text')]);
      }
      public function wishlist($lang = null){
        if (!in_array($lang,config("settings.languages"))) {$lang='az';}
        app()->setLocale($lang);
        $user = User::all();
        return view('wishlist',compact('user'));
      }
      // public function gethelp($id = null){
      //   $helpdesk = HelpDesk::all();
      //   $helpdesk = HelpDesk::find($id);
      //   $helpdesklist = Helpdesklist::all();
      //   return view('helpdesk',['helpdesk' => $helpdesk], ['helpdesklist' => $helpdesklist]);
      // }
      public function addtowishlist(Request $req){
        $prod = ProductDetails::find($req->pro);
        $wishlist = new Wishlist;
        if (Auth::check()) {
          $ws = Wishlist::where('user_id',Auth::user()->id)->where('product_id',$prod->id)->first();
          $wishlist->user_id = Auth::user()->id;
          $wishlist->product_id = $prod->id;
          if (empty($ws)) {
            $wishlist->save();
            $mess = Lang::get("app.Wishlist_added");
          }else{
            if ($req->qty >= 1) {$ws->quantity = $req->qty;}
            $ws->update();
            $mess = Lang::get("app.Wishlist_updated");
          }
        }
        return response()->json(['success' => $mess,'error' => 'failed']);
      }
      public function acc_settings($lang = null){
        if (!in_array($lang,config("settings.languages"))) {$lang='az';}
        app()->setLocale($lang);
        return view('myaccount');}
      public function getwishlist($lang = null){
        if (!in_array($lang,config("settings.languages"))) {$lang='az';}
        app()->setLocale($lang);
        return view('wishlist');}
      public function updateuser_data(Request $req){
        $us = User::find(Auth::user()->id);
        $us->dob = $req->dob;
        $us->name = $req->name;
        $us->surname = $req->surname;
        $us->mobile = $req->mobile;
        $us->update();
        return response()->json(['success' => Lang::get("app.Updated_user_data")]);
      }
      // public function sendproblem(Request $request){
      //         $helpdesk = new HelpDesk;
      //         $helpdesk['created_at'] = new \DateTime();
      //         $helpdesk->user_id=$request->user_id;
      //         $helpdesk->problem_id=$request->problem_id;
      //         $helpdesk->problem_title=$request->problem_title;
      //         $helpdesk->problem_body = $request->problem_body;
      //         $helpdesk->save();
      //         return redirect()->back()->with('succ2','Administration will reply very soon')
      //         ->with('product_report','Thank you for informing us!')
      //         ->with('post_report','Thank you for informing us!');
      // }
      // public function getData(){
      //   $productdetails = ProductDetails::all();
      //   $category = Category::all();
      //   $subcat = Subcat::all();
      //   return view('admin.sellproduct', ['productdetails' => $productdetails], ['category' => $category], ['subcat' => $subcat]);
      // }
      // public function profileedit(){
      //   $user = User::all();
      //   return view('layouts.profile_edit',compact('user'));
      // }
      // public function getdatabyajax(Request $request){
      //   $data = Subcat::select('name', 'id')->where('parent_id', $request->id)->take(100)->get();
      //   return response()->json($data);
      // }
      public function update_avatar(Request $request){
        if($request->hasFile('avatar')){
          $avatar = $request->file('avatar');
          $filename = time() . '.' . $avatar->getClientOriginalExtension();
          Image::make($avatar)->resize(500, 500)->save(public_path('/uploads/avatars/' . $filename));
          $user = Auth::user();
          $user->avatar = $filename;
          $user->save();
        }
        return Redirect()->back();
      }

      // NEWS COMMENTING
      public function addnewscomment(Request $req){
          // $this->validate($req, [
          //   'name' => 'required|min:2',
          //   'surname' => 'required|min:3',
          //   'email' => 'required|min:3',
          //   'message' => 'required|min:3',
          // ]);
          $nc = new Newscomment;
          $nc->name = $req->name;
          $nc->surname = $req->surname;
          $nc->email = $req->email;
          $nc->message = $req->message;
          if (empty($req->news_id)) {
            $nc->news_id = 0;
            $nc->product_id = $req->product_id;
          }else{
            $nc->news_id = $req->news_id;
            $nc->product_id = 0;
          }
          if (Auth::check()) {
            $nc->user_id = Auth::user()->id;
          }
          $nc->rating = $req->rating;
          $nc->verify = 1;
          $nc->save();
          return response()->json(['success'=>Lang::get('app.Comment_added'),'error' => 'Failed']);
      }
}
