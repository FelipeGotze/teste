<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    use HttpResponses;

    public function newUser(Request $data)
    {

        $values = ['user' => $data->user, 'pass' => $data->pass, 'email' => $data->email];
        $results = DB::insert('INSERT INTO users (uuid, name, pass, email) VALUES (uuid(), :name, :pass, :email)', $values);

        if ($results) {
            return $this->success([
                'user' => $data->user,
                'email' => $data->email
            ]);
        } else {
            return $this->error([
                'user' => $data->user,
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
