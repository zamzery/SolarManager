<?php

namespace App\Http\Controllers;
use App\Models\Unidadesmedida;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UnidadesmedidaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Unidadesmedida::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required',
            'unidad'=>'required',
            'abreviatura'=>'required'
        ]);
        return Unidadesmedida::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Unidadesmedida::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $unidadesmedida = Unidadesmedida::find($id);
        $unidadesmedida->update($request->all());
        return $unidadesmedida;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Unidadesmedida::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Unidadesmedida::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $unidadesmedida = Unidadesmedida::find($id);
        $unidadesmedida->update(['activo' => 1]);
        return $unidadesmedida;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $unidadesmedida = Unidadesmedida::find($id);
        $unidadesmedida->update(['activo' => 0]);
        return $unidadesmedida;
    }
}
