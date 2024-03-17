<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class ProductDetails extends Model
{
    protected $table = 'productdetails';
    public function star(){
      return $this->hasMany('App\Star');
    }
    protected $appends = ['is_edited'];

     public function getIsEditedAttribute()
     {
          return $this->attributes['is_edited'] = ($this->created_at != $this->updated_at) ? true : false;
     }

}
