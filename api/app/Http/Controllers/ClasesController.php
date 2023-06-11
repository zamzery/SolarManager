<?php

namespace App\Http\Controllers;
use App\Models\Clases;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClasesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Clases::all();
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
            'sucursal_id'=>'required',
            'teoria'=>'required',
            'teoria_id'=>'required',
            'practica'=>'required',
            'practica_id'=>'required',
            'user_id'=>$id
        ]);
        return Clases::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Clases::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $clases = Clases::find($id);
        $clases->update($request->all());
        return $clases;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Clases::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Clases::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $clases = Clases::find($id);
        $clases->update(['activo' => 1]);
        return $clases;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $clases = Clases::find($id);
        $clases->update(['activo' => 0]);
        return $clases;
    }
}
