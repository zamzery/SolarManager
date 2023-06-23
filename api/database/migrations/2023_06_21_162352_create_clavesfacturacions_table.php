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
        Schema::create('clavesfacturaciones', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->text('nombre');
            $table->string('clave');
            $table->boolean('activo')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clavesfacturaciones');
    }
};
