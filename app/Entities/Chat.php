<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Traits\TransformableTrait;

class Chat extends Model implements Transformable
{
    use TransformableTrait;


}
