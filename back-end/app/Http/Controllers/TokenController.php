<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Jose\Component\Core\AlgorithmManager;
use Jose\Component\Core\JWK;
use Jose\Component\Signature\Algorithm\HS256;
use Jose\Component\Signature\JWSBuilder;
use Jose\Component\Signature\Serializer\CompactSerializer;
use Jose\Component\Signature\JWSVerifier;
use Jose\Component\Signature\Serializer\JWSSerializerManager;

class TokenController extends Controller
{
    static function createToken(Request $data)
    {

        $algorithmManager = new AlgorithmManager([
            new HS256(),
        ]);


        $jwk = new JWK([
            'kty' => 'oct',
            'k' => getenv('APP_TOKEN'),
        ]);


        $jwsBuilder = new JWSBuilder($algorithmManager);

        $payload = json_encode([
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + 3600,
            'sub' => $data->id,
            'email' => $data->email,
        ]);

        $jws = $jwsBuilder
            ->create()
            ->withPayload($payload)
            ->addSignature($jwk, ['alg' => 'HS256', 'typ' => 'jwt'])
            ->build();

        $serializer = new CompactSerializer(); // The serializer

        $token = $serializer->serialize($jws, 0);

        return $token;
    }

    static function validateToken(Request $data)
    {

        $algorithmManager = new AlgorithmManager([
            new HS256(),
        ]);

        $jwsVerifier = new JWSVerifier(
            $algorithmManager
        );

        $jwk = new JWK([
            'kty' => 'oct',
            'k' => getenv('APP_TOKEN'),
        ]);

        $serializerManager = new JWSSerializerManager([
            new CompactSerializer(),
        ]);

        $jws = $serializerManager->unserialize($data->token);

        $isVerified = $jwsVerifier->verifyWithKey($jws, $jwk, 0);

        return $isVerified;
    }
}
