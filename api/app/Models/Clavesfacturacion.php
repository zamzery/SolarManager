<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clavesfacturacion extends Model
{
    use HasFactory;
    protected $table = 'clavesfacturaciones';
    protected $fillable = ['clavesfacturaciones_id', 'nombre', 'clave', 'activo'];
}
