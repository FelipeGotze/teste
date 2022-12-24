<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarsModelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/get-cars', [CarsModelController::class, 'showCars']);
Route::post('/get-car', [CarsModelController::class, 'showCar']);
Route::post('/create-car', [CarsModelController::class, 'createCar']);
Route::post('/update-car', [CarsModelController::class, 'updateCar']);
Route::post('/remove-car', [CarsModelController::class, 'removeCar']);


Route::post('/register', [UserController::class, 'newUser']);

Route::post('/login', [AuthController::class, 'login']);
Route::get('/me', [AuthController::class, 'get_me']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
