<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Invoice extends Model implements Transformable
    use TransformableTrait;
    protected $fillable = ['user_id','total_price','total_qty'];

    public function ites(){
      return $this->hasMany(InvoiceItem::class);
    }
    public function user(){
        
    }
}