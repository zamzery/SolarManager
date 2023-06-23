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
        Schema::create('detallefacturas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('facturas_id');
            $table->integer('clases_id');
            $table->text('descripcion');
            $table->string('cantidad', 9)->default(1);
            $table->decimal('precioUnitario', 9,2);
            $table->decimal('subtotal', 9,2);
            $table->string('usoCfdi', 3)->default('002');
            $table->string('factor', 4)->default('tasa');
            $table->string('tasaCuota', 8)->default('0.160000');
            $table->decimal('ivaUnitario', 9,2);
            $table->string('status', 25);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detallefacturas');
    }
};
