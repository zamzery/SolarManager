<?php

namespace App\Http\Controllers;
use App\Models\Practicas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PracticasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Practicas::all();
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
        ]);
        return Practicas::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Practicas::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $practicas = Practicas::find($id);
        $practicas->update($request->all());
        return $practicas;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Practicas::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Practicas::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $practicas = Practicas::find($id);
        $practicas->update(['activo' => 1]);
        return $practicas;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $practicas = Practicas::find($id);
        $practicas->update(['activo' => 0]);
        return $practicas;
    }
}
