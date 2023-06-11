<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumnos extends Model
{
    use HasFactory;
    protected $table = 'alumnos';
    protected $fillable = ['nombre', 'email', 'password', 'maestro_id', 'sucursal_id', 'celular', 'telefono', 'metodopago_id', 'numero_cuenta', 'direccion', 'observaciones', 'curso_id', 'teoria_id', 'practica_id', 'factura', 'rfc', 'razon_social', 'regimen_fiscal', 'cp', 'user_id', 'activo'];
}