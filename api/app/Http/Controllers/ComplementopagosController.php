<?php

namespace App\Http\Controllers;
use App\Models\Complementopagos;
use Illuminate\Http\Request;

class ComplementopagosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Complementopagos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'folioFiscal'=>'required',
            'clientes_id'=>'required',
            'total'=>'required',
            'banco'=>'required',
            'numCuenta'=>'required',
            'precioUnitario'=>'required',
            'formadePago'=>'required',
            'fechaPago'=>'required',
            'usoCfdi'=>'required',
            'comentarioAdicional'=>'required',
            'status'=>'required'
        ]);
        return Complementopagos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Complementopagos::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $complementopagos = Complementopagos::find($id);
        $complementopagos->update($request->all());
        return $complementopagos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Complementopagos::destroy($id);
    }

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Complementopagos::where('name', 'like', '%'.$name.'%')->get();
    }
}
