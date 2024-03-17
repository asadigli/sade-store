<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Newscomment extends Model
{
    protected $table = 'newscomment';
    protected $dates = [
      'created_at',
      'updated_at',
    ];
}
