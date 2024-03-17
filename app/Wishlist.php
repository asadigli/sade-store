<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $table = "wishlist";
    protected $dates = [
      'created_at',
      'updated_at',
    ];
}
