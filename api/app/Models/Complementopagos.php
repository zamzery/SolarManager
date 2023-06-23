<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complementopagos extends Model
{
    use HasFactory;
    protected $table = 'complementopagos';
    protected $fillable = ['folioFiscal', 'clientes_id', 'total', 'banco', 'numCuenta', 'precioUnitario', 'formadePago', 'fechaPago', 'usoCfdi', 'pagoPDF', 'pagoXML', 'comentarioAdicional', 'pagoPDFCancelado', 'pagoXMLCancelado', 'motivo', 'folioSustitucion', 'emailEnviado', 'status'];
}