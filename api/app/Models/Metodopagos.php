<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metodopagos extends Model
{
    use HasFactory;
    protected $table = 'metodopagos';
    protected $fillable = ['nombre', 'descripcion', 'cuenta', 'activo'];
}