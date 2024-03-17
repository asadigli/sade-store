<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'message';
    public function user(){
      return $this->belongTo('App\User');
    }
}
