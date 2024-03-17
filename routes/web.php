<?php


use App\Http\Middleware\Admin;
if(version_compare(PHP_VERSION, '7.2.0', '>=')) {
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
}
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::group(['prefix' => '{lang?}', 'middleware' => 'lang'], function ($lang=null){
  Route::get('/generate-sitemap','DataController@testing');
  Route::get('/currency/{curr}','HomeController@changecurrency');

  Route::get('/check','Controller@check_invoice');
  Route::get('/check-invoice','Controller@check_in');

  Route::get('/get-similar-products','DataController@getprosuggestions');
  Route::get('/', 'HomeController@welcomedata')->name('welc');
  // Route::redirect('/home', '/');
  Route::get('/welcome/{filter}','HomeController@filterwelcomedata');
  Route::post('/get-contact','Controller@getcontact');
  Route::get('/product-details/{slug}','ProductController@displaydata');
  Route::get('/p/{id}','ProductController@displaydataredirecttourl');

  Route::get('/products', 'DataController@getsubcatID');
  Route::get('/store/{slug}','Controller@getpagedata');
  Route::post('/call-me','Controller@callme');
  Route::get('/news/{slug}','Controller@getnews');
  Route::get('/n/{id}','Controller@getnewsredirecttourl');

  Route::get('/all-news', 'Controller@allnews');
  Route::get('/contact', 'Controller@contactus');

  Route::get('/get-pro-list','DataController@getprolist');
  Route::get('/get-pro-list-for-category','DataController@getprolist_forcat');
  Route::get('/get-header-wishlist','DataController@getwishlist');
  Route::get('/get-wishlist','DataController@getwishlist_total');

  Route::get('/get-prod-comments','DataController@get_prod_comments');
  Route::get('/get-news-comments','DataController@get_news_comments');
  Route::get('/get-searched-prod-list','DataController@getsearch_prodlist');
  Route::get('/tags/{tag}','DataController@getallcomments');
  Route::get('/get-similar-comments','DataController@get_similar_comments');

  Route::post('/add-new-comment','UserController@addnewscomment');
  Route::get('/subcategory/{slug}','DataController@getsubcatID');
  Route::get('/category/{slug}/{sort?}','DataController@getcatID');
  Route::get('/page-not-found','HomeController@notfound');
  Route::get('/filteredproducts/{numb}','HomeController@filteredproducts');
  Route::get('/search-result/search={request}/{sort?}/{page?}','DataController@searchedproducts');
  Route::post('/filter-result','DataController@add_session');
  Route::post('/subscibe-now','Controller@subscibe');
  Route::get('/sendsms','Controller@send_sms');

  Route::group(['middleware' => 'auth'], function(){
    Route::get('/account','UserController@myaccount');
    Route::get('/getdetails','UserController@get_details');
    Route::post('/add-to-wishlist','UserController@addtowishlist');
    Route::get('/account/settings','UserController@acc_settings');
    Route::post('/update/user-information','UserController@updateuser_data');
    Route::get('/my-wishlist','UserController@getwishlist');
    Route::get('/get-total-wishlist-price','UserController@wishlist_sum');
    Route::delete('/delete-wishlist/{id}','UserController@deletewishlist');
    Route::post('/update-wishlist','DataController@updatewishlist');
  });
  Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
  Route::post('login', 'Auth\LoginController@login');
  Route::post('logout', 'Auth\LoginController@logout')->name('logout');
  Route::get('register', 'Auth\RegisterController@getreg')->name('register');
  Route::post('register', 'Auth\RegisterController@register');
// });
