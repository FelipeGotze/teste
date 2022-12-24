<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\TokenController as Token;

use Illuminate\Support\Facades\DB;


class AuthController extends Controller
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

    //login testa o e-mail primeiro, encontrando testa a senha e emite a resposta para o front-end contendo usuário, e-mail e token
    public function login(Request $data)
    {

        $request = DB::select('SELECT email FROM users WHERE email=:email', ['email' => $data->email]);

        if ($request) {

            $users = DB::select('SELECT * FROM users WHERE password=:password AND email=:email', ['password' => md5($data->password), 'email' => $data->email]);
            $users = (array) $users[0];

            if ($users) {

                $token = Token::createToken($users['uuid'], $users['email']);

                $values = ['uuid' => $users['uuid'], 'name' => $users['name'], 'token' => $token];

                DB::insert('INSERT INTO loggedusers (uuid, name, token) VALUES (:uuid, :name, :token)', $values);

                return $this->success([
                    'id' => $users['uuid'],
                    'name' => $users['name'],
                    'email' => $users['email'],
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

    public function get_me(Request $request)
    {
        $token = $request->header('Authorization');
        $user = json_decode(base64_decode(str_replace('_', '/', str_replace('-', '+', explode('.', $token)[1]))));

        $user = (array)$user;

        $fetch = DB::select('SELECT id, name, email FROM users WHERE email=:email', ['email' => $user['email']]);


        $token = explode(" ", $token);

        $return = ['id' => $fetch[0]->id, 'name' => $fetch[0]->name, 'email' => $fetch[0]->email, 'token' => $token[1]];

        return $return;
    }
}
