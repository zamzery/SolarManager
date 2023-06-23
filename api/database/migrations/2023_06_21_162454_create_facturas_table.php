<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('facturas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('serie', 2);
            $table->string('metodopagos_id', 3);
            $table->dateTime('fecha');
            $table->text('folioFiscal');
            $table->string('claveTipoComprobante', 1);
            $table->string('usoCfdi', 3);
            $table->string('formadePago', 2);
            $table->string('moneda', 3)->default('MXN');
            $table->decimal('tipoCambio', 9,2)->default(1);
            $table->decimal('subtotal', 9,2);
            $table->decimal('descuento', 9,2);
            $table->decimal('iva', 9,2);
            $table->decimal('total', 9,2);
            $table->text('nombrePDF');
            $table->text('nombreXML');
            $table->integer('alumnos_id');
            $table->integer('user_id');
            $table->text('comentarioAdicional');
            $table->boolean('conPago')->default(false);
            $table->boolean('emailEnviado')->default(false);
            $table->text('facturaCfdiRelacionada')->nullable();
            $table->text('facturaFolioRelacionada')->nullable();
            $table->decimal('totalFacturaRelacionada', 9,2);
            $table->integer('comisionesID')->nullable();
            $table->dateTime('fechaStatus')->nullable();
            $table->dateTime('fechaCancelacion')->nullable();
            $table->string('motivo', 2);
            $table->text('folioSustitucion')->nullable();
            $table->text('nombrePDFCancelado')->nullable();
            $table->text('nombreXMLCancelado')->nullable();
            $table->boolean('emailEnviadoCancelado')->default(false);
            $table->string('status', 25);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facturas');
    }
};
