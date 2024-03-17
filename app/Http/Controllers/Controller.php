<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Contact;
use Illuminate\Http\Request;
use App\News;
use DB;
use App\Page;
use App\Seodesc;
use App\Seotag;
use App\View;
use App\ProductDetails;
use Lang;
use App\Subscription;
use Twilio;
use App\User;
use App\Wishlist;
use App\Newscomment;
use App\Post;
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function check_invoice($lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      return view('check');}
    public function send_sms(){
      echo "string";
    }
    public function subscibe(Request $req){
      $sb = new Subscription;
      $sb->email = $req->email;
      $sb->status = 1;
      if (empty(Subscription::where('email',$req->email)->first())) {
        $sb->save();
      }
      return response()->json(['success' => Lang::get('app.You_successfully_subscibed')]);
    }
    public function check_in(Request $req){
      $id = $req->invoice_id;
      $number = $req->phone_number;
      if (!empty($id) && !empty($number)) {
        $num = "994".$number;
        $curl = curl_init();
          curl_setopt_array($curl, array(
            CURLOPT_URL => "https://sade.asgro.org/api/get-invoice-details/".$id."/".$num."/".md5(date("d-M-Y")."999").md5(date("Y-m-d")."111"),
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
          $invs = json_decode($res,true);
          $err = curl_error($curl);
          curl_close($curl);
          if ($err) {
            echo "Error:" . $err;
          } else {
            if (!empty($invs)) {
              foreach ($invs as $key => $inv) {
                $price = $inv['original_price']*$inv['quantity']-$inv['price']*$inv['quantity'];
                $date = strtotime($inv['date']['date']);
                $pro = ProductDetails::where('main_id',$inv['pro_id'])->first();
                if (!empty($pro)) {
                  $pro_link = "https://sade.store/p/".$pro->id;
                  $product = $pro->productname;
                }else{
                  $product = "";
                  $pro_link = "#";
                }
                  echo "<table class='table invoice-table'><thead><tr><th colspan='1'>".Lang::get("app.About_invoice")."</th><th></th></tr></thead><tbody><tr><td>".Lang::get('app.Check_id').":</td><td>".$inv['invoice_id']."</td></tr><tr><td>".Lang::get('app.Product_name').":</td><td>".$inv['pro_id']."</td></tr><tr><td>".Lang::get('app.Product').":</td><td><a href='".$pro_link."' target='_blank' style='color:#19bfb1'>".$product."</a></td></tr><tr><td>".Lang::get('app.Sale_date').":</td><td>".date('d M, Y',$date)."</td></tr><tr><td>".Lang::get('app.Buyer').":</td><td>".$inv['buyer']."</td></tr><tr><td>".Lang::get('app.phone_number').":</td><td>".$inv['contact_number']."</td></tr><tr><td>".Lang::get('app.Quantity').":</td><td>".Lang::choice('app.Quantity_s',$inv['quantity'])."</td></tr><tr><td>".Lang::get('app.Price_without_discount').":</td><td>".$inv['original_price']." AZN</td></tr><tr><td>".Lang::get('app.Discount').":</td><td>".$price." AZN</td></tr><tr><td>".Lang::get('app.Total_paid').":</td><td>".$inv['price']." AZN</td></tr></tbody></table>";
              }
            }else{echo "<table class='table invoice-table'><thead><tr><th colspan='1'>Qəbz haqqında</th></tr></thead><tbody><tr><td style='text-align:left'>".Lang::get('app.No_information_found')."</td></tr></tbody></table>";}
          }
      }else{echo "<table class='table invoice-table'><thead><tr><th colspan='1'>Qəbz haqqında</th></tr></thead><tbody><tr><td style='text-align:left'>".Lang::get('app.No_information_found')."</td></tr></tbody></table>";}
    }
    public function getcontact(Request $req){
      $this->validate($req, [
        'name' => 'required|min:3',
        'surname' => 'required|min:3',
        'email' => 'required|min:3',
        'subject' => 'required|min:3',
        'message' => 'required|min:3',
      ]);
      $cont = new Contact;
      $cont->name = $req->name;
      $cont->surname = $req->surname;
      $cont->email = $req->email;
      $cont->user_ip = \Request::ip();
      $cont->phone_number = 0;
      $cont->problem_title = $req->subject;
      $cont->problem_body = $req->message;
      if (Contact::where('email',$req->email)->where('problem_title',$req->subject)->where('problem_body',$req->message)->count() == 0) {
        $cont->save();
      }
      return response()->json(['success'=>Lang::get('app.You_sent_message'),'error' => 'Failed']);
    }
    public function callme(Request $req){
        $this->validate($req, [
          'name' => 'required|min:2',
          'surname' => 'required|min:2',
          'email' => 'required|min:3',
          'phone_number' => 'required|min:3',
        ]);
          $cont = new Contact;
          $cont->name = $req->name;
          $cont->surname = $req->surname;
          $cont->email = $req->email;
          $cont->user_ip = \Request::ip();
          $cont->phone_number = $req->phone_number;
          $cont->problem_title = "CALL ME";
          $cont->problem_body = "CALL ME";
          $cnts = Contact::where('user_ip',\Request::ip())->where('phone_number',$req->phone_number)->whereDate('created_at', \Carbon\Carbon::today())->get();
          if (count($cnts) == 0) {
            $cont->save();
          }
          return response()->json(['success'=>'Data is successfully added','error' => 'Failed']);
    }
    public function getnewsredirecttourl($id){
        $news = News::find($id);
        return redirect()->to('news/'.$news->slug);
    }
    public function getnews($slug,$lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $news = DB::table('news')->where('slug', $slug)->first();
      $view = new View;
      $view->news_id = $news->id;
      $view->user_ip = \Request::ip();
      $view->save();
      $seods = Seodesc::where('news_id','=',[$news->id])->get();
      $seots = Seotag::where('news_id','=',[$news->id])->get();
      return view('news',compact('news','seods','seots'));
    }
    public function allnews($lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $news = News::orderBy('created_at','desc')->paginate(6);
      return view('allnews',compact('news'));
    }
    public function getpagedata($slug,$lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $page = DB::table('pages')->where('slug',$slug)->where('status',1)->first();
      $previous = Page::where('id', '<', $page->id)->max('slug');
      $next = Page::where('id', '>', $page->id)->min('slug');

      $view = new View;
      $view->page_id = $page->id;
      $view->user_ip = \Request::ip();
      $view->save();
      $seods = Seodesc::where('page_id',$page->id)->get();
      $seots = Seotag::where('page_id',$page->id)->get();
      return view('page',compact('page','seods','seots'))->with('previous', $previous)->with('next', $next);
    }
    public function getall_data(Request $req){
      if ($req->token == md5(date("d-M-Y")."999").md5(date("Y-m-d")."111")) {
        $pros = ProductDetails::all()->count();
        $comm_list = [];
        $ns = Newscomment::orderBy("created_at","desc")->get();
        foreach ($ns as $key => $n) {
          $comm_list[] = ['id' => $n['id'],'body' => $n['message'],'product' => $n['product_id']];
        }
        $pro = ProductDetails::orderBy("view","desc")->get();
        foreach ($pro as $k => $p) {
          $pro_list[] = ['main_id' => $p['main_id'],'product_name' => $p['productname'],'view' => $p['view'],'slug' => $p['slug']];
        }
        $views = ProductDetails::all()->sum('view');
        $user = User::all()->count();
        $wishlist = Wishlist::all()->count();
        $subscription = Subscription::all()->count();
        $newscomment = Newscomment::all()->count();
        $post = Post::all()->count();
        $array = [$pros,$user,$wishlist,$subscription,$newscomment,$views,$post,$comm_list,$pro_list];
        return $array;
        // md5(date("d-M-Y")."999").md5(date("Y-m-d")."111")
      }else{
        // echo md5(date("d-M-Y")."999").md5(date("Y-m-d")."111");
        echo "You do not have permission to enter!";
      }
    }
    public function contactus($lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      return view('contact_us');
    }
}
