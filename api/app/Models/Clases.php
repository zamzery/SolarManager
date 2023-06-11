<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clases extends Model
{
    use HasFactory;
    protected $table = 'clases';
    protected $fillable = ['alumno_id', 'maestro_id', 'semana', 'sucursal_id', 'teoria', 'teoria_id', 'practica', 'practica_id', 'user_id', 'comentarios', 'activo'];
}
