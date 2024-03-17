<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
use App\User;
use Carbon\Carbon;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/account';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function login(Request $req){
        if(Auth::attempt(['email' => $req->email,'password' => $req->password])){
          $user = User::where('email', $req->email)->first();
          if (Auth::user()->mobile_verification == 1) {
            $user->access_token = md5($user->mobile.date("d-M-Y"));
            $user->update();
          }
          if($user->is_admin()){
            return redirect('https://admin.sade.store/');
          }else{
            return redirect('/account');
          }
        }else{
          return redirect()->back();
        }
    }
}
