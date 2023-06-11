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
        Schema::create('teorias', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('alumno_id');
            $table->integer('maestro_id');
            $table->tinyInteger('semana');
            $table->integer('horario_id');
            $table->integer('sucursal_id');
            $table->integer('user_id');
            $table->text('comentarios');
            $table->boolean('activo')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teorias');
    }
};
