<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detallefacturas extends Model
{
    use HasFactory;
    protected $table = 'detallefacturas';
    protected $fillable = ['facturas_id', 'clases_id', 'descripcion', 'cantidad', 'precioUnitario', 'subtotal', 'usoCfdi', 'factor', 'tasaCuota', 'ivaUnitario', 'status'];
}
