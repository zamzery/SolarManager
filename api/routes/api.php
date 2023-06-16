<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AlumnosController;
use App\Http\Controllers\CargosController;
use App\Http\Controllers\ClasesController;
use App\Http\Controllers\CursosController;
use App\Http\Controllers\HorariosController;
use App\Http\Controllers\MaestrosController;
use App\Http\Controllers\MetodopagosController;
use App\Http\Controllers\PagosController;
use App\Http\Controllers\PracticasController;
use App\Http\Controllers\SucursalesController;
use App\Http\Controllers\TeoriasController;
use App\Http\Controllers\UserController;

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


Route::post('/clases', function(){
    return 'clases';
});

/********************
 * RUTAS PROTEGIDAS *
 ********************/
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/alumnos', [AlumnosController::class, 'store']);
    Route::put('/alumnos', [AlumnosController::class, 'update']);
    Route::delete('/alumnos/{id}', [AlumnosController::class, 'destroy']);
    Route::put('/alumnos/activar/{id}', [AlumnosController::class, 'activar']);
    Route::put('/alumnos/desactivar/{id}', [AlumnosController::class, 'desactivar']);

    Route::post('/cargos', [CargosController::class, 'store']);
    Route::put('/cargos', [CargosController::class, 'update']);
    Route::delete('/cargos/{id}', [CargosController::class, 'destroy']);
    Route::put('/cargos/activar/{id}', [CargosController::class, 'activar']);
    Route::put('/cargos/desactivar/{id}', [CargosController::class, 'desactivar']);

    Route::post('/clases', [ClasesController::class, 'store']);
    Route::put('/clases', [ClasesController::class, 'update']);
    Route::delete('/clases/{id}', [ClasesController::class, 'destroy']);
    Route::put('/clases/activar/{id}', [ClasesController::class, 'activar']);
    Route::put('/clases/desactivar/{id}', [ClasesController::class, 'desactivar']);

    Route::post('/cursos', [CursosController::class, 'store']);
    Route::put('/cursos', [CursosController::class, 'update']);
    Route::delete('/cursos/{id}', [CursosController::class, 'destroy']);
    Route::put('/cursos/activar/{id}', [CursosController::class, 'activar']);
    Route::put('/cursos/desactivar/{id}', [CursosController::class, 'desactivar']);

    Route::post('/horarios', [HorariosController::class, 'store']);
    Route::put('/horarios', [HorariosController::class, 'update']);
    Route::delete('/horarios/{id}', [HorariosController::class, 'destroy']);
    Route::put('/horarios/activar/{id}', [HorariosController::class, 'activar']);
    Route::put('/horarios/desactivar/{id}', [HorariosController::class, 'desactivar']);

    Route::post('/maestros', [MaestrosController::class, 'store']);
    Route::put('/maestros', [MaestrosController::class, 'update']);
    Route::delete('/maestros/{id}', [MaestrosController::class, 'destroy']);
    Route::put('/maestros/activar/{id}', [MaestrosController::class, 'activar']);
    Route::put('/maestros/desactivar/{id}', [MaestrosController::class, 'desactivar']);

    Route::post('/metodopagos', [MetodopagosController::class, 'store']);
    Route::put('/metodopagos', [MetodopagosController::class, 'update']);
    Route::delete('/metodopagos/{id}', [MetodopagosController::class, 'destroy']);
    Route::put('/metodopagos/activar/{id}', [MetodopagosController::class, 'activar']);
    Route::put('/metodopagos/desactivar/{id}', [MetodopagosController::class, 'desactivar']);

    Route::post('/pagos', [PagosController::class, 'store']);
    Route::put('/pagos', [PagosController::class, 'update']);
    Route::delete('/pagos/{id}', [PagosController::class, 'destroy']);
    Route::put('/pagos/activar/{id}', [PagosController::class, 'activar']);
    Route::put('/pagos/desactivar/{id}', [PagosController::class, 'desactivar']);

    Route::post('/practicas', [PracticasController::class, 'store']);
    Route::put('/practicas', [PracticasController::class, 'update']);
    Route::delete('/practicas/{id}', [PracticasController::class, 'destroy']);
    Route::put('/practicas/activar/{id}', [PracticasController::class, 'activar']);
    Route::put('/practicas/desactivar/{id}', [PracticasController::class, 'desactivar']);

    Route::post('/sucursales', [SucursalesController::class, 'store']);
    Route::put('/sucursales', [SucursalesController::class, 'update']);
    Route::delete('/sucursales/{id}', [SucursalesController::class, 'destroy']);
    Route::put('/sucursales/activar/{id}', [SucursalesController::class, 'activar']);
    Route::put('/sucursales/desactivar/{id}', [SucursalesController::class, 'desactivar']);

    Route::post('/teorias', [TeoriasController::class, 'store']);
    Route::put('/teorias', [TeoriasController::class, 'update']);
    Route::delete('/teorias/{id}', [TeoriasController::class, 'destroy']);
    Route::put('/teorias/activar/{id}', [TeoriasController::class, 'activar']);
    Route::put('/teorias/desactivar/{id}', [TeoriasController::class, 'desactivar']);

    Route::put('/users', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    Route::put('/users/activar/{id}', [UserController::class, 'activar']);
    Route::put('/users/desactivar/{id}', [UserController::class, 'desactivar']);

    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::get('/users/buscar/{name}', [UserController::class, 'search']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
});

/******************
 * RUTAS PUBLICAS *
 ******************/
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/alumnos', [AlumnosController::class, 'index']);
Route::get('/alumnos/{id}', [AlumnosController::class, 'show']);
Route::get('/alumnos/buscar/{name}', [AlumnosController::class, 'search']);

Route::get('/cargos', [CargosController::class, 'index']);
Route::get('/cargos/{id}', [CargosController::class, 'show']);
Route::get('/cargos/buscar/{name}', [CargosController::class, 'search']);

Route::get('/clases', [ClasesController::class, 'index']);
Route::get('/clases/{id}', [ClasesController::class, 'show']);
Route::get('/clases/buscar/{name}', [ClasesController::class, 'search']);

Route::get('/cursos', [CursosController::class, 'index']);
Route::get('/cursos/{id}', [CursosController::class, 'show']);
Route::get('/cursos/buscar/{name}', [CursosController::class, 'search']);

Route::get('/horarios', [HorariosController::class, 'index']);
Route::get('/horarios/{id}', [HorariosController::class, 'show']);
Route::get('/horarios/buscar/{name}', [HorariosController::class, 'search']);

Route::get('/maestros', [MaestrosController::class, 'index']);
Route::get('/maestros/{id}', [MaestrosController::class, 'show']);
Route::get('/maestros/buscar/{name}', [MaestrosController::class, 'search']);

Route::get('/metodopagos', [MetodopagosController::class, 'index']);
Route::get('/metodopagos/{id}', [MetodopagosController::class, 'show']);
Route::get('/metodopagos/buscar/{name}', [MetodopagosController::class, 'search']);

Route::get('/pagos', [PagosController::class, 'index']);
Route::get('/pagos/{id}', [PagosController::class, 'show']);
Route::get('/pagos/buscar/{name}', [PagosController::class, 'search']);

Route::get('/practicas', [PracticasController::class, 'index']);
Route::get('/practicas/{id}', [PracticasController::class, 'show']);
Route::get('/practicas/buscar/{name}', [PracticasController::class, 'search']);

Route::get('/sucursales', [SucursalesController::class, 'index']);
Route::get('/sucursales/{id}', [SucursalesController::class, 'show']);
Route::get('/sucursales/buscar/{name}', [SucursalesController::class, 'search']);

Route::get('/teorias', [TeoriasController::class, 'index']);
Route::get('/teorias/{id}', [TeoriasController::class, 'show']);
Route::get('/teorias/buscar/{name}', [TeoriasController::class, 'search']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
