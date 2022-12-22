<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\TokenController as Token;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\DB;


class AuthController extends Controller
{
    use HttpResponses;

    //login testa o e-mail primeiro, encontrando testa a senha e emite a resposta para o front-end contendo usuário, e-mail e token
    public function login(Request $data)
    {

        $request = DB::select('SELECT email FROM users WHERE email=:email', ['email' => $data->email]);
        if ($request) {
            $users = DB::select('SELECT uuid,name,email FROM users WHERE pass=:pass', ['pass' => md5($data->pass)]);
            if ($users) {

                $token = Token::createToken($users['uuid'], $users['email']);

                $values = ['token' => $token];

                DB::insert('INSERT INTO loggedUsers (uuid, name, token) VALUES (uuid(), :name, :token)', $values);

                return $this->success([
                    'user' => $data->user,
                    'email' => $data->email,
                    'token' => $token
                ]);
            } else {
                return $this->error([], 'Usuario e/ou senha incorretos', 400);
            }
        } else {
            return $this->error([], 'Usuario e/ou senha incorretos', 400);
        }
    }

    //verifica o token, retornando http 200 se válido ou 401 se não autenticado
    //exclui o token caso haja no bando de dados de uma sessão anterior
    public function verifyToken(Request $data)
    {
        $token = Token::validateToken($data->token);
        if ($token) {
            return $this->success([
                'token' => $data->token
            ], 200);
        } else {
            DB::table('loggedUsers')->where('uuid', '==', $data->uuid)->delete();
            return $this->error([], 'Login inválido', 401);
        }
    }

    //log out exclui o token do banco de dados
    public function logout(Request $data)
    {
        $deleted = DB::table('loggedUsers')->where('token', '==', $data->token)->delete();

        if ($deleted) {
            return $this->success([]);
        }
    }
}
