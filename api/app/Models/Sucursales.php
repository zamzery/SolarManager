<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sucursales extends Model
{
    use HasFactory;
    protected $table = 'sucursales';
    protected $fillable = ['nombre', 'direccion', 'telefono', 'email', 'logo', 'activo'];
}