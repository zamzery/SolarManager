<?php

namespace App\Http\Controllers;
use App\Models\Alumnos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $id = Auth::id();
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
            'user_id'=>$id
        ]);
        return Alumnos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Alumnos::find($id);
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

    /**
     * Search the specified resource from storage.
     */
    public function search(string $name)
    {
        return Alumnos::where('name', 'like', '%'.$name.'%')->get();
    }

    /**
     * Activar the specified resource from storage.
     */
    public function activar(string $id)
    {
        $alumnos = Alumnos::find($id);
        $alumnos->update(['activo' => 1]);
        return $alumnos;
    }

    /**
     * Desactivar the specified resource from storage.
     */
    public function desactivar(string $id)
    {
        $alumnos = Alumnos::find($id);
        $alumnos->update(['activo' => 0]);
        return $alumnos;
    }
}
