<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detallecomplementos extends Model
{
    use HasFactory;
    protected $table = 'detallecomplementos';
    protected $fillable = ['complementopagos_id', 'facturas_id', 'serie', 'folioFiscalFac', 'fechaFactura', 'parcialidad', 'saldoAnterior', 'estePago', 'saldoRestante'];
}
