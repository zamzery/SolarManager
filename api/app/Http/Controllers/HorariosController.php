<?php

namespace App\Http\Controllers;
use App\Models\Horarios;
use Illuminate\Http\Request;

class HorariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Horarios::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'hora_inicio'=>'required',
            'hora_fin'=>'required'
        ]);
        return Horarios::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Horarios::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $horarios = Horarios::find($id);
        $horarios->update($request->all());
        return $horarios;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Horarios::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Horarios::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $horarios = Horarios::find($id);
        $horarios->update(['activo' => 1]);
        return $horarios;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $horarios = Horarios::find($id);
        $horarios->update(['activo' => 0]);
        return $horarios;
    }
}
