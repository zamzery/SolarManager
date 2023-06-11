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
        Schema::create('permisos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->tinyInteger('user_id');
            $table->tinyInteger('alumnos');
            $table->tinyInteger('alumnos_editar');
            $table->tinyInteger('maestros');
            $table->tinyInteger('maestros_editar');
            $table->tinyInteger('cursos');
            $table->tinyInteger('cursos_editar');
            $table->tinyInteger('sucursales');
            $table->tinyInteger('sucursales_editar');
            $table->tinyInteger('pagos');
            $table->tinyInteger('pagos_editar');
            $table->tinyInteger('reportes');
            $table->tinyInteger('reportes_editar');
            $table->tinyInteger('users');
            $table->tinyInteger('users_editar');
            $table->tinyInteger('cargos');
            $table->tinyInteger('cargos_editar');
            $table->tinyInteger('clases');
            $table->tinyInteger('clases_editar');
            $table->tinyInteger('horarios');
            $table->tinyInteger('horarios_editar');
            $table->tinyInteger('teoria');
            $table->tinyInteger('teoria_editar');
            $table->tinyInteger('practica');
            $table->tinyInteger('practica_editar');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permisos');
    }
};
