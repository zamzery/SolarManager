<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practicas extends Model
{
    use HasFactory;
    protected $table = 'practicas';
    protected $fillable = ['alumno_id', 'maestro_id', 'semana', 'horario_id', 'sucursal_id', 'user_id', 'comentarios', 'activo'];
}
