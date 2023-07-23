<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'name'=>'required|string',
            'email'=>'required|string|unique:users,email',
            'password'=>'required|string|confirmed',
            'cargo_id'=>'required',
            'maestro'=>'required',
            'telefono'=>'',
            'direccion'=>'',
            'avatar'=>'',
        ]);

        $user = User::create([
            'name'=>$fields['name'],
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'cargo_id'=>$fields['cargo_id'],
            'maestro'=>$fields['maestro'],
            'telefono'=>$fields['telefono'],
            'direccion'=>$fields['direccion'],
            'avatar'=>$fields['avatar']
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response=[
            'user'=>$user,
            'token'=>$token
        ];

        return response($response, 201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();

        return [
            'message'=>'Se ha cerrado la sesion'
        ];
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email'=>'required|string',
            'password'=>'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if( isset($user->email) ){
            if( Hash::check($fields['password'], $user->password) ){
                $token = $user->createToken('auth_token')->plainTextToken;
                $response=[
                    'user'=>$user,
                    'access_token'=>$token,
                    'redireccion'=>$user->redireccion,
                    'estatus'=>'ok'
                ];
                return response($response, 201);
            } else {
                return response([
                    'message'=>'El usuario o la contraseña son incorrectos.'
                ], 401);
            }
        } else {
            return response([
                'message'=>'El usuario o la contraseña son incorrectos.'
            ], 401);
        }
    }
}
