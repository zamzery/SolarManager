<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlumnosController;


use App\Models\Cargos;
use App\Models\Clases;
use App\Models\Cursos;
use App\Models\Horarios;
use App\Models\Maestros;
use App\Models\Metodopagos;
use App\Models\Pagos;
use App\Models\Practicas;
use App\Models\Sucursales;
use App\Models\Teorias;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/alumnos', [AlumnosController::class, 'index']);
Route::post('/alumnos', [AlumnosController::class, 'store']);

Route::post('/clases', function(){
    return 'clases';
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
