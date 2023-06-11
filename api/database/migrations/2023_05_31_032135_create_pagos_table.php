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
        Schema::create('pagos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('alumno_id')->references('id')->on('alumnos');
            $table->integer('metodopago_id');
            $table->text('numero_cuenta');
            $table->double('pago', 9, 2);
            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('statusPago');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pagos');
    }
};
