<?php

namespace App\Http\Controllers;
use App\Models\Sucursales;
use Illuminate\Http\Request;

class SucursalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Sucursales::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required',
            'direccion'=>'required',
            'telefono'=>'required'
        ]);
        return Sucursales::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Sucursales::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $sucursales = Sucursales::find($id);
        $sucursales->update($request->all());
        return $sucursales;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Sucursales::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Sucursales::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $sucursales = Sucursales::find($id);
        $sucursales->update(['activo' => 1]);
        return $sucursales;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $sucursales = Sucursales::find($id);
        $sucursales->update(['activo' => 0]);
        return $sucursales;
    }
}
