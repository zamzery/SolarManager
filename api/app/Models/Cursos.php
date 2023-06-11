<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cursos extends Model
{
    use HasFactory;
    protected $table = 'cursos';
    protected $fillable = ['alumno_id', 'maestro_id', 'semana', 'horario_id', 'sucursal_id', 'user_id', 'comentarios', 'activo'];
}
