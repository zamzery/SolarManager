<?php

namespace App\Http\Controllers;
use App\Models\Detallefacturas;
use Illuminate\Http\Request;

class DetallefacturasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Detallefacturas::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'facturas_id'=>'required',
            'clases_id'=>'required',
            'descripcion'=>'required',
            'cantidad'=>'required',
            'precioUnitario'=>'required',
            'subtotal'=>'required',
            'usoCfdi'=>'required',
            'factor'=>'required',
            'tasaCuota'=>'required',
            'ivaUnitario'=>'required',
            'status'=>'required'
        ]);
        return Detallefacturas::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Detallefacturas::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $detallefacturas = Detallefacturas::find($id);
        $detallefacturas->update($request->all());
        return $detallefacturas;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Detallefacturas::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Detallefacturas::where('name', 'like', '%'.$name.'%')->get();
    }
}
