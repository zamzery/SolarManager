<?php

namespace App\Http\Controllers;
use App\Models\Metodopagos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MetodopagosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Metodopagos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required',
            'cuenta'=>'required'
        ]);
        return Metodopagos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Metodopagos::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $metodopagos = Metodopagos::find($id);
        $metodopagos->update($request->all());
        return $metodopagos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Metodopagos::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Metodopagos::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $metodopagos = Metodopagos::find($id);
        $metodopagos->update(['activo' => 1]);
        return $metodopagos;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $metodopagos = Metodopagos::find($id);
        $metodopagos->update(['activo' => 0]);
        return $metodopagos;
    }
}
