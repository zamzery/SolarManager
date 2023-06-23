<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DetallecomplementosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Detallecomplementos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = Auth::id();
        $request->validate([
            'complementopagos_id'=>'required',
            'facturas_id'=>'required',
            'serie'=>'required',
            'folioFiscalFac'=>'required',
            'fechaFactura'=>'required',
            'parcialidad'=>'required',
            'saldoAnterior'=>'required',
            'estePago'=>'required',
            'saldoRestante'=>'required'
        ]);
        return Detallecomplementos::create($request->all());
    }

    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Detallecomplementos::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $detallecomplementos = Detallecomplementos::find($id);
        $detallecomplementos->update($request->all());
        return $detallecomplementos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Detallecomplementos::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Detallecomplementos::where('name', 'like', '%'.$name.'%')->get();
    }
}
