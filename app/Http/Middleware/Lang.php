<?php

namespace App\Http\Middleware;

use Closure;
use Session;
use Config;
use App;

class Lang
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){
        $lang = Session::get('lang',Config::get('app.locale'));
        App::setlocale($lang);
        if (!in_array($lang,config("settings.languages"))) {
          return redirect("/");
        }
        return $next($request);
    }
}
