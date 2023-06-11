<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permisos extends Model
{
    use HasFactory;
    protected $table = 'permisos';
    protected $fillable = ['alumnos', 'alumnos_editar', 'maestros', 'maestros_editar', 'cursos', 'cursos_editar', 'sucursales', 'sucursales_editar', 'pagos', 'pagos_editar', 'reportes', 'reportes_editar', 'users', 'users_editar', 'cargos', 'cargos_editar', 'clases', 'clases_editar', 'horarios', 'horarios_editar', 'teoria', 'teoria_editar', 'practica', 'practica_editar'];
}