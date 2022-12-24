<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    protected function success($data, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'Request was sucessful',
            'message' => $message,
            'data' => $data
        ], $code);
    }
    protected function error($data, $message = null, $code)
    {
        return response()->json([
            'status' => 'Error has ocurred...',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    public function newUser(Request $data)
    {

        $values = ['name' => $data->name, 'password' => md5($data->password), 'email' => $data->email];
        $results = DB::insert('INSERT INTO users (uuid, name, password, email) VALUES (uuid(), :name, :password, :email)', $values);

        if ($results) {
            return $this->success([
                'user' => $data->name,
                'email' => $data->email
            ]);
        } else {
            return $this->error([
                'name' => $data->user,
                'email' => $data->email
            ], 'Houve um erro no cadastro, tente novamente', 400);
        }
    }

    public function viewUser(Request $data)
    {
        $values = ['uuid' => $data->uuid];
        $users = DB::select('SELECT * FROM users WHERE uuid=:uuid', $values);
        return $users;
    }
}
