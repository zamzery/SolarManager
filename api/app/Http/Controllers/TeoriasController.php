<?php

namespace App\Http\Controllers;
use App\Models\Teorias;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Teorias::all();
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
        return Teorias::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Teorias::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $teorias = Teorias::find($id);
        $teorias->update($request->all());
        return $teorias;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Teorias::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Teorias::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $teorias = Teorias::find($id);
        $teorias->update(['activo' => 1]);
        return $teorias;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $teorias = Teorias::find($id);
        $teorias->update(['activo' => 0]);
        return $teorias;
    }
}
