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
        Schema::create('complementopagos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->text('folioFiscal');
            $table->integer('clientes_id');
            $table->decimal('total', 9,2);
            $table->text('banco');
            $table->string('numCuenta', 50);
            $table->decimal('precioUnitario', 9,2);
            $table->string('formadePago', 50);
            $table->date('fechaPago');
            $table->string('usoCfdi', 50);
            $table->text('pagoPDF');
            $table->text('pagoXML');
            $table->text('comentarioAdicional');
            $table->text('pagoPDFCancelado')->nullable();
            $table->text('pagoXMLCancelado')->nullable();
            $table->string('motivo', 2)->nullable();
            $table->text('folioSustitucion')->nullable();
            $table->boolean('emailEnviado')->default(false);
            $table->string('status', 25);            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complementopagos');
    }
};
