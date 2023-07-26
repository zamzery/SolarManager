<?php

namespace App\Http\Controllers;
use App\Models\Facturas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FacturasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Facturas::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = Auth::id();
        $request->validate([
            'metodopagos_id'=>'required',
            'fecha'=>'required',
            'folioFiscal'=>'required',
            'claveTipoComprobante'=>'required',
            'usoCfdi'=>'required',
            'formadePago'=>'required',
            'moneda'=>'required',
            'tipoCambio'=>'required',
            'subtotal'=>'required',
            'descuento'=>'required',
            'iva'=>'required',
            'total'=>'required',
            'user_id'=>$id
        ]);
        return Facturas::create($request->all());
    }

    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Facturas::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $facturas = Facturas::find($id);
        $facturas->update($request->all());
        return $facturas;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Facturas::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Facturas::where('name', 'like', '%'.$name.'%')->get();
    }
}
