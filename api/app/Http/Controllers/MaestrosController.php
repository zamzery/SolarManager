<?php

namespace App\Http\Controllers;
use App\Models\Maestros;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MaestrosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Maestros::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id'=>'required',
            'sucursal_id'=>'required'
        ]);
        return Maestros::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Maestros::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $maestros = Maestros::find($id);
        $maestros->update($request->all());
        return $maestros;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Maestros::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Maestros::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $maestros = Maestros::find($id);
        $maestros->update(['activo' => 1]);
        return $maestros;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $maestros = Maestros::find($id);
        $maestros->update(['activo' => 0]);
        return $maestros;
    }
}
