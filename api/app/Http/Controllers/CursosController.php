<?php

namespace App\Http\Controllers;
use App\Models\Cursos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CursosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cursos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = Auth::id();
        $request->validate([
            'alumno_id'=>'required',
            'maestro_id'=>'required',
            'semana'=>'required',
            'horario_id'=>'required',
            'sucursal_id'=>'required',
            'user_id'=>$id
            'comentarios'=>'required',
        ]);
        return Cursos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Cursos::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cursos = Cursos::find($id);
        $cursos->update($request->all());
        return $cursos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Cursos::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Cursos::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $cursos = Cursos::find($id);
        $cursos->update(['activo' => 1]);
        return $cursos;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $cursos = Cursos::find($id);
        $cursos->update(['activo' => 0]);
        return $cursos;
    }
}
