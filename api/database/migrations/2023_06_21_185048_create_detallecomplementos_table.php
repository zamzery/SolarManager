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
        Schema::create('detallecomplementos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('complementopagos_id');
            $table->integer('facturas_id');
            $table->string('serie', 2);
            $table->text('folioFiscalFac');
            $table->dateTime('fechaFactura');
            $table->integer('parcialidad');
            $table->decimal('saldoAnterior', 9,2);
            $table->decimal('estePago', 9,2);
            $table->decimal('saldoRestante', 9,2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detallecomplementos');
    }
};
