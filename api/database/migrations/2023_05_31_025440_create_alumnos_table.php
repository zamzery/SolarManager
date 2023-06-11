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
        Schema::create('alumnos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nombre');
            $table->string('email');
            $table->string('password');
            $table->integer('maestro_id')->nullable()->unsigned();
            $table->integer('sucursal_id');
            $table->string('celular');
            $table->string('telefono');
            $table->integer('metodopago_id')->default(1);
            $table->text('numero_cuenta');
            $table->text('direccion');
            $table->text('observaciones');
            $table->integer('curso_id');
            $table->integer('teoria_id');
            $table->integer('practica_id');
            $table->boolean('factura')->default(false);
            $table->string('rfc')->nullable();
            $table->string('razon_social')->nullable();
            $table->string('regimen_fiscal')->nullable();
            $table->string('cp')->nullable();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->boolean('activo')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumnos');
    }
};
