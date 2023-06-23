<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facturas extends Model
{
    use HasFactory;
    protected $table = 'facturas';
    protected $fillable = ['serie', 'metodopagos_id', 'fecha', 'folioFiscal', 'claveTipoComprobante', 'usoCfdi', 'formadePago', 'moneda', 'tipoCambio', 'subtotal', 'descuento', 'iva', 'total', 'nombrePDF', 'nombreXML', 'alumnos_id', 'user_id', 'comentarioAdicional', 'conPago', 'emailEnviado', 'facturaCfdiRelacionada', 'facturaFolioRelacionada', 'totalFacturaRelacionada', 'comisionesID', 'fechaStatus', 'fechaCancelacion', 'motivo', 'folioSustitucion', 'nombrePDFCancelado', 'nombreXMLCancelado', 'emailEnviadoCancelado', 'status'];
}