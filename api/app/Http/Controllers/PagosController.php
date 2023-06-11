<?php

namespace App\Http\Controllers;
use App\Models\Pagos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PagosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pagos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = Auth::id();
        $request->validate([
            'alumno_id'=>'required',
            'metodopago_id'=>'required',
            'numero_cuenta'=>'required',
            'pago'=>'required',
            'user_id'=>$id
        ]);
        return Pagos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Pagos::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $pagos = Pagos::find($id);
        $pagos->update($request->all());
        return $pagos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Pagos::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Pagos::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $pagos = Pagos::find($id);
        $pagos->update(['activo' => 1]);
        return $pagos;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $pagos = Pagos::find($id);
        $pagos->update(['activo' => 0]);
        return $pagos;
    }
}
