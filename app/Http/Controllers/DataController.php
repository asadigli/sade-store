<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductDetails;
use App\Category;
use App\Subcat;
use Input;
use App\Tag;
use DB;
use App\Seodesc;
use App\Seotag;
use App\View;
use App\Images;
use Session;
use Lang;
use App\Wishlist;
use Auth;
use App\Newscomment;
use App;
use App\News;
use App\Page;
class DataController extends Controller
{
    public function updatewishlist(Request $req){
      $ws = Wishlist::find($req->id);
      if ($ws->user_id == Auth::user()->id) {
        $ws->quantity = $req->qt;
        $ws->update();
      }
      return response()->json(['success' => 'success']);
    }
    public function getsearch_prodlist(Request $req){
      $prods = ProductDetails::all();
      if (empty($req->order)) {$or = 1;
      }else{$or = $req->order;}
      $tag = new Tag;
      $search = $req->search;
      $tag->tag_name = strtolower($search);
      $ta = Tag::where('tag_name',$search)->first();
      if (!empty($req->max)) {$max = $req->max;}else{$max = 10000;}
      if (!empty($req->min)) {$min = $req->min;}else{$min = 0;}
      if (empty($ta)) {$tag->count = 1;if (strlen($req->search) >= 4) {$tag->save();}}else{$ta->count += 1;$ta->update();}
      if (empty($req->numb) | $req->numb <= 6) {$numb = 6;}else{$numb = $req->numb;}
      $br = $req->brands;
      if(count($br) != 0){$brands = $br;}else{$brands = [];
        foreach ($prods as $key => $prod) {$brands[] = $prod->brand;}}
      if ($req->sub_id == 0) {
        $pros = DB::table('productdetails')
            ->select('productdetails.*','productdetails.id as id','subcat.slug as sb_slug','subcat.name as name','images.image')
            ->join('subcat','subcat.id','=','productdetails.subcat_id')
            ->join('images',function ($join) {
                $join->on('images.id', '=', DB::raw('(SELECT id FROM images s WHERE s.pro_id = productdetails.id LIMIT 1)'));
            })->where("price",">=",$min)
              ->where('price',"<=",$max)
              ->whereIn('brand',$brands)
              ->where(function ($qu) use ($search,$req){
                $qu->where(function ($query) use ($search, $req){
                      $query->where('productdetails.productname','LIKE','%' .$search. '%');
                })->orWhere(function ($query) use ($search, $req){
                      $query->where('productdetails.features','LIKE','%' .$search. '%')
                            ->orWhere('productdetails.main_id','LIKE','%' .$search. '%');
                });
              })->orderByRaw('created_at','desc')->take($numb)->get();
      }else{
        $pros = DB::table('productdetails')
            ->select('productdetails.*','productdetails.id as id','subcat.slug as sb_slug','subcat.name as name','images.image')
            ->join('subcat','subcat.id','=','productdetails.subcat_id')
            ->join('images',function ($join) {
                $join->on('images.id', '=', DB::raw('(SELECT id FROM images s WHERE s.pro_id = productdetails.id LIMIT 1)'));
            })->where("price",">=",$min)->where('price',"<=",$max)
              ->whereIn('brand',$brands)
              ->where(function ($qu) use ($search,$req){
              $qu->where(function ($query) use ($search, $req){
                    $query->where('productdetails.subcat_id', $req->sub_id)
                          ->where('productdetails.productname','LIKE','%' .$search. '%');
              })->orWhere(function ($query) use ($search, $req){
                    $query->where('productdetails.subcat_id', $req->sub_id)
                          ->where('productdetails.features','LIKE','%' .$search. '%')
                          ->orWhere('productdetails.main_id','LIKE','%' .$search. '%');
              });
            })->orderByRaw('created_at','desc')->take($numb)->get();
      }
      return response()->json($pros);
    }
    public function getprosuggestions(Request $req){
      $search = $req->search;
      if ($req->sub_id == 0) {
        $pros = DB::table('productdetails')
            ->select('productdetails.*','productdetails.id as id','subcat.slug as sb_slug','subcat.name as name','images.image')
            ->join('subcat','subcat.id','=','productdetails.subcat_id')
            ->join('images',function ($join) {
                $join->on('images.id', '=', DB::raw('(SELECT id FROM images s WHERE s.pro_id = productdetails.id LIMIT 1)'));
            })
            ->where(function ($query) use ($search, $req){
                  $query->where('productdetails.productname','LIKE','%' .$search. '%');
            })
            ->orWhere(function ($query) use ($search, $req){
                  $query->where('productdetails.features','LIKE','%' .$search. '%')
                        ->orWhere('productdetails.main_id','LIKE','%' .$search. '%');
            })
            ->orderBy('created_at','desc')->take(3)
            ->get();
      }else{
        $pros = DB::table('productdetails')
            ->select('productdetails.*','productdetails.id as id','subcat.slug as sb_slug','subcat.name as name','images.image')
            ->join('subcat','subcat.id','=','productdetails.subcat_id')
            ->join('images',function ($join) {
                $join->on('images.id', '=', DB::raw('(SELECT id FROM images s WHERE s.pro_id = productdetails.id LIMIT 1)'));
            })
            ->where(function ($query) use ($search, $req){
                  $query->where('productdetails.subcat_id', $req->sub_id)
                        ->where('productdetails.productname','LIKE','%' .$search. '%');
            })
            ->orWhere(function ($query) use ($search, $req){
                  $query->where('productdetails.subcat_id', $req->sub_id)
                        ->where('productdetails.features','LIKE','%' .$search. '%')
                        ->orWhere('productdetails.main_id','LIKE','%' .$search. '%');
            })
            ->orderBy('created_at','desc')->take(3)
            ->get();
      }
      return response()->json($pros);
    }
    public function getprolist(Request $req){
      $prods = ProductDetails::all();
      if(empty($req->numb) | $req->numb <= 6) {$numb = 6;}else{$numb = $req->numb;}
      if(!empty($req->max)) {$max = $req->max;}else{$max = 10000;}
      if(!empty($req->min)) {$min = $req->min;}else{$min = 0;}
      $br = $req->brands;
      if(count($br) != 0){
        $brands = $br;
      }else{
        $brands = [];
        foreach ($prods as $key => $prod) {$brands[] = $prod->brand;}
      }
      $sb = Subcat::where('slug',$req->slug)->first();
      $sb->view += 1;
      $sb->update();
      $pros = DB::table('productdetails')
          ->select('productdetails.*','productdetails.id as id','subcat.name','subcat.slug as sb_slug','images.image')
          ->join('subcat','subcat.id','=','productdetails.subcat_id')
          ->join('images',function ($join) {
              $join->on('images.id', '=', DB::raw('(SELECT id FROM images WHERE images.pro_id = productdetails.id LIMIT 1)'));
          })->where(['subcat_id' => $sb->id])
          ->where('price','>=',$min)->where('price','<=',$max)->whereIn('brand',$brands)
          ->orderBy('created_at','desc')->take($numb)
          ->get();
      return response()->json($pros);
    }
    public function getprolist_forcat(Request $req){
      $prods = ProductDetails::all();
      if(empty($req->numb) | $req->numb <= 6) {$numb = 6;}else{$numb = $req->numb;}
      if(!empty($req->max)) {$max = $req->max;}else{$max = 10000;}
      if(!empty($req->min)) {$min = $req->min;}else{$min = 0;}
      $br = $req->brands;
      if(count($br) != 0){
        $brands = $br;
      }else{
        $brands = [];
        foreach ($prods as $key => $prod) {
          $brands[] = $prod->brand;
        }
      }
      $cat = Category::where('slug',$req->slug)->first();
      $cat->view += 1;
      $cat->update();
      $pros = DB::table('productdetails')
          ->select('productdetails.*','productdetails.id as id','category.name as cat_name','subcat.slug as sb_slug','subcat.name as name','category.slug as cat_slug','images.image')
          ->join('category','category.id','=','productdetails.category_id')
          ->join('subcat','subcat.id','=','productdetails.subcat_id')
          ->join('images',function ($join) {
              $join->on('images.id', '=', DB::raw('(SELECT id FROM images s WHERE s.pro_id = productdetails.id LIMIT 1)'));
          })->where(['productdetails.category_id' => $cat->id])
          ->where('price','>=',$min)->where('price','<=',$max)->whereIn('brand',$brands)
          ->orderBy('created_at','desc')->take($numb)
          ->get();
      return response()->json($pros);
    }
    public function getwishlist(){
      if (Auth::check()) {
        $pros = DB::table('wishlist')
            ->select('wishlist.*','wishlist.id as id','productdetails.discount','productdetails.price','productdetails.productname','productdetails.slug','images.image')
            ->join('productdetails','productdetails.id','=','wishlist.product_id')
            ->join('images',function ($join) {
                $join->on('images.id', '=', DB::raw('(SELECT s.id FROM images s WHERE s.pro_id = wishlist.product_id LIMIT 1)'));
            })->where(['wishlist.user_id' => Auth::user()->id])
            ->orderBy('created_at','desc')->take(5)
            ->get();
        return $pros;
      }else{return "";}
    }
    public function getwishlist_total(Request $req){
      if (Auth::check()) {
        if (empty($req->numb) | $req->numb <= 4) {$numb = 4;}else{$numb = $req->numb;}
        $pros = DB::table('wishlist')
            ->select('wishlist.*','wishlist.id as id','productdetails.discount','productdetails.price','productdetails.productname','productdetails.slug','images.image')
            ->join('productdetails','productdetails.id','=','wishlist.product_id')
            ->join('images',function ($join) {
                $join->on('images.id', '=', DB::raw('(SELECT s.id FROM images s WHERE s.pro_id = wishlist.product_id LIMIT 1)'));
            })->where(['wishlist.user_id' => Auth::user()->id])
            ->orderBy('created_at','desc')->take($numb)
            ->get();
        return $pros;
      }else{return "";}
    }
    public function get_prod_comments(Request $req){
      if (empty($req->numb) | $req->numb <= 6) {$numb = 6;}else{$numb = $req->numb;}
      $prod = $req->prod;
      $comms = DB::table('newscomment')
          ->select('newscomment.*','newscomment.id as id','productdetails.id as pro_id')
          ->join('productdetails','productdetails.id','=','newscomment.product_id')
          // ->join('users','users.id','=','newscomment.user_id')
          ->where(['newscomment.verify' => 1,'newscomment.news_id' => 0])
          ->where(['newscomment.product_id' => $prod])
          ->orderBy('created_at','desc')->take($numb)
          ->get();
      return $comms;
    }
    public function get_news_comments(Request $req){
      if (empty($req->numb) | $req->numb <= 6) {$numb = 6;}else{$numb = $req->numb;}
      $news = $req->news;
      $comms = DB::table('newscomment')
          ->select('newscomment.*','newscomment.id as id','news.id as news_id','users.id as us_id')
          ->join('news','news.id','=','newscomment.news_id')
          ->join('users','users.id','=','newscomment.user_id')
          ->where(['newscomment.verify' => 1])
          ->where(['newscomment.news_id' => $news])
          ->orderBy('created_at','desc')->take($numb)
          ->get();
      return $comms;
    }
    public function getsubcatID($slug,$sort = null,$lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $subcat = DB::table('subcat')->where('slug', $slug)->first();
      $ss = Subcat::find($subcat->id);
      $ss->view += 1;
      $ss->update();
      $cat = Category::where('id',$subcat->parent_id)->first();
      $brands = array_values(explode(',', Input::get("brands")[0]));
      if (!empty(Input::get("min_price"))) {$min = Input::get("min_price");}else{$min = 0;}
      if (!empty(Input::get("max_price"))) {$max = Input::get("max_price");}else{$max = 100000;}
      // if (!empty($brands)) {
      //   $pros = DB::table('productdetails')->where('subcat_id',$subcat->id)->where('quantity','!=','0')->orderBy('created_at','desc')->get();
      // }else{
        $pros = DB::table('productdetails')->where('subcat_id',$subcat->id)->orderBy('created_at','desc')->get();
      // }
      if (empty($sort)) {
          $sr = 0;
      }else{$sr = $sort;}
      $seods = Seodesc::where('subcategory_id',$subcat->id)->get();
      $seots = Seotag::where('subcategory_id',$subcat->id)->get();
      $cnt = count($pros);
      return view('subcats',compact('cat','subcat','pros','seods','seots','sr','cnt','max','min'));
    }
    public function getcatID($slug,$sort = null,$lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $cat = DB::table('category')->where('slug', $slug)->first();
      $ccc = Category::find($cat->id);
      $ccc->view += 1;
      $ccc->update();
      if (empty($sort) | $sort == 0) {
        $pros = DB::table('productdetails')->where('category_id',$cat->id)->where('quantity','!=','0')->orderBy('created_at','desc')->paginate(21);
      }else if($sort == 1){
        $pros = DB::table('productdetails')->where('category_id',$cat->id)->where('quantity','!=','0')->orderBy('productname','asc')->paginate(21);
      }else if($sort == 2){
        $pros = DB::table('productdetails')->where('category_id',$cat->id)->where('quantity','!=','0')->orderBy('productname','desc')->paginate(21);
      }else if($sort == 3){
        $pros = DB::table('productdetails')->where('category_id',$cat->id)->where('quantity','!=','0')->orderByRaw('(price - discount) DESC')->paginate(21);
      }else if($sort == 4){
        $pros = DB::table('productdetails')->where('category_id',$cat->id)->where('quantity','!=','0')->orderByRaw('(price - discount)','ASC')->paginate(21);
      }
      if (empty($sort)) {
        $sr = 0;
      }else{$sr = $sort;}
      $seods = Seodesc::where('category_id',$cat->id)->get();
      $seots = Seotag::where('category_id',$cat->id)->get();
      $cnt = count($pros);
      return view('subcats',compact('cat','pros','seods','seots','sr','cnt'));
    }
    // public function getprosuggestions($part = null, $cat = null){
    //     if (!empty($cat)) {
    //       $prods = ProductDetails::where('productname','LIKE','%'.$part.'%')->where('subcat_id',$cat)->take(3)->get();
    //     }else{
    //       $prods = ProductDetails::where('productname','LIKE','%'.$part.'%')->take(3)->get();
    //     }
    //     foreach ($prods as $key => $prod) {
    //       if (Session::get('currency') != 'AZN') {
    //         $crr = "AZN";
    //       }else{
    //         $crr = Session::get('currency');
    //       }
    //       if (!empty($prod->discount) | $prod->discount != 0) {
    //         $old_price = $prod->price.$crr;
    //         $new_price = ($prod->price - $prod->discount).$crr;
    //       }else{
    //         $old_price = "";
    //         $new_price = $prod->price.$crr;
    //       }
    //       $img = Images::where('pro_id',$prod->id)->first();
    //       echo '<li><div class="image"><img src="/uploads/proph/small/'.$img->image.'" alt="'.$prod->productname.'"></div><div class="info-product"><div class="name"><a href="/product-details/'.$prod->slug.'" title="'.$prod->productname.'">'.$prod->productname.'</a></div><div class="price"><span class="sale">'.$new_price.'</span><span class="regular">'.$old_price.'</span></div></div></li>';
    //     }
    // }
    public function searchedproducts(Request $request,$lang =null){
        if (!in_array($lang,config("settings.languages"))) {$lang='az';}
        app()->setLocale($lang);
        $sub_id = $request->sub_id;
        $search = $request->search;
        if($request->sub_id == 0){
          $pros = ProductDetails::orderBy('created_at','desc')->where('productname','LIKE','%' .$search. '%')
          ->orWhere('features','LIKE','%' .$search. '%')
          ->orWhere('main_id','LIKE','%' .$search. '%')
          ->get();
        }else{
          $pros = ProductDetails::orderBy('created_at','desc')->where(function ($query) use ($search, $request){
                $query->where('subcat_id', $request->sub_id)
                      ->where('productname','LIKE','%' .$search. '%');
          })
          ->orWhere(function ($query) use ($search, $request){
                $query->where('subcat_id', $request->sub_id)
                      ->where('features','LIKE','%' .$search. '%')
                      ->orWhere('main_id','LIKE','%' .$search. '%');
          })->get();
        }
        $count = count($pros);
        return view('searchedproducts',compact('pros','search','count','sub_id'));
    }
    public function get_similar_comments(Request $req){
      if (empty($req->numb) | $req->numb <= 6) {$numb = 6;}else{$numb = $req->numb;}
      $tag = "#".$req->tag;
      $comms = DB::table('newscomment')
          ->select('newscomment.*','productdetails.productname as pro_name','productdetails.slug as pro_slug','news.news_title as news_title','news.slug as news_slug')
          ->leftJoin('productdetails','productdetails.id','=','newscomment.product_id')
          ->leftJoin('news','news.id','=','newscomment.news_id')
          ->join('users','users.id','=','newscomment.user_id')
          ->where(['newscomment.verify' => 1])
          ->where('message','LIKE','%' .$tag. '%')
          ->orderBy('created_at','desc')->take($numb)
          ->get();
      return $comms;
    }
    public function getallcomments($tags,$lang = null){
      if (!in_array($lang,config("settings.languages"))) {$lang='az';}
      app()->setLocale($lang);
      $tag = $tags;
      $comms = Newscomment::where('message','LIKE','%' ."#".$tag. '%')->get();
      return view('tags',compact('tag','comms'));
    }
    public function testing($lang = null){
      echo "testing";
    }
}
