<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pagos extends Model
{
    use HasFactory;
    protected $table = 'pagos';
    protected $fillable = ['alumno_id', 'metodopago_id', 'numero_cuenta', 'pago', 'user_id', 'statusPago'];
}