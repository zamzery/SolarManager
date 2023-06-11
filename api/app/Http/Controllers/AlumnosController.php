<?php

namespace App\Http\Controllers;
use App\Models\Alumnos;
use Illuminate\Http\Request;

class AlumnosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Alumnos::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required',
            'email'=>'required',
            'maestro_id'=>'required',
            'sucursal_id'=>'required',
            'celular'=>'required',
            'direccion'=>'required',
            'metodopago_id'=>'required',
            'curso_id'=>'required',
            'factura'=>'required',
            'cp'=>'required',
            'user_id'=>'required'
        ]);
        return Alumnos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $alumnos = Alumnos::find($id);
        $alumnos->update($request->all());
        return $alumnos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Alumnos::destroy($id);
    }
}
