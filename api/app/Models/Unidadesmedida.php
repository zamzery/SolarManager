<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unidadesmedida extends Model
{
    use HasFactory;
    protected $table = 'unidadesmedida';
    protected $fillable = ['unidadesmedida_id', 'nombre', 'unidad', 'abreviatura', 'activo'];
}
