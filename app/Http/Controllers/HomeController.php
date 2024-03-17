<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\ProductDetails;
use App\Subcat;
use DB;
use Input;
use Counter;
use App\Star;
use App\User;
use App\View;
use Session;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function welcomedata($lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $productdetails = ProductDetails::where('quantity','!=',0)->orderBy('created_at','desc')->paginate(16);
      $category = Category::all();
      $subcat = Subcat::all();
      $ran = Subcat::inRandomOrder()->take(1)->get();
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
        foreach ($productdetails as $k => $prod) {
          foreach ($response as $ke => $p) {
            if ($prod->main_id == $p['pro_id']) {
              $pro = ProductDetails::where('main_id',$prod->main_id)->first();
              $pro->quantity = $p['quantity'];
              $pro->discount = $pro->price - $p['price'];
              $pro->update();
            }
          }
        }
      }
      $sub_for_pro = DB::select("SELECT s.*, COUNT(p.id) AS cnt, p.id as pro_id FROM subcat s LEFT JOIN productdetails p ON s.id = p.subcat_id GROUP BY s.id HAVING COUNT(p.id) >= 3 ORDER BY RAND ( ) LIMIT 3");
      return view('index', compact('ran','productdetails','category','subcat','sub_for_pro'));
    }
    public function notfound($lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      return view('error');
    }
    public function filterwelcomedata(Request $request){
      $filter = $request->filter;
      if($filter==0){
        $productdetails = ProductDetails::where('quantity','!=',0)->orderBy('price','desc')->paginate(16);
      }elseif($filter==1){
        $productdetails = ProductDetails::where('quantity','!=',0)->orderBy('price','ASC')->paginate(16);
      }
      elseif($filter==2){
        $prod = ProductDetails::all();
        foreach($prod as $prod){
          $star = Star::all();
         foreach($star as $star){
           if(($prod->id) == ($star->product_id)){
             $productdetails = ProductDetails::where('quantity','!=',0)->orderBy('price','desc')->paginate(16);
           }
         }
      }
      }
      elseif($filter==3){
         $productdetails = ProductDetails::all();
      }
      return view('index', compact('productdetails'));
    }
    public function filteredproducts(Request $request){
      $numb = $request->numb;
      if($numb==0){
        $productdetails = ProductDetails::where('quantity','!=',0)->orderBy('created_at','desc')->take(20)->paginate(16);
      }
      elseif($numb==1){
        $star = Star::all();
        foreach($star as $star){
          $productdetails = ProductDetails::where('id',$star->product_id)->paginate(4);
        }
      }
      elseif($numb=3){
        $user = User::where('role_id',4)->orWhere('role_id',2)->orWhere('role_id',3)->get();
        foreach($user as $user){
          $productdetails = ProductDetails::where('seller',$user->id)->paginate(16);
        }
      }
      else{
        $productdetails = ProductDetails::where('quantity','!=',0)->orderBy('created_at','desc')->paginate(16);
      }
      return view('filteredproducts',compact('productdetails','category','subcat'));
    }

    public function changecurrency($curr){
      $crs = array("AZN","RUB","TRY","USD");
      if (in_array($curr,$crs)) {
        $r = file_get_contents(base_path('/public/currency.json'));
        $r = json_decode($r,true);
        Session::put('currency',$curr);
        Session::put('difference',$r[$curr]);
        return redirect()->back();
      }else{
        return redirect('/');
      }
    }
}
