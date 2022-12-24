<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CarsModelController extends Controller
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

    public function createCar(Request $data)
    {
        $values = ['name' => $data->name, 'model' => $data->model, 'brand' => $data->brand, 'image' => $data->brand, 'price' => (int)$data->price];
        $insert = DB::insert('INSERT INTO cars_models (name, model, brand, image, price) VALUES (:name, :model, :brand, :image, :price)', $values);

        if ($insert) {
            return $this->success([]);
        } else {
            return $this->error([], 'Não foi possível efetuar o cadastro', 401);
        }
    }
    //CarsModelController
    public function updateCar(Request $data)
    {
        $values = [
            'id' => $data->id,
            'name' => $data->nameForm,
            'model' => $data->modelForm,
            'brand' => $data->brandForm,
            'price' => (int)$data->priceForm
        ];

        $insert = DB::update('UPDATE cars_models SET name=:name, model=:model, brand=:brand, price=:price WHERE id=:id', $values);

        if ($insert) {
            return $this->success([]);
        } else {
            return $this->error([], 'Não foi possível efetuar o cadastro', 401);
        }
    }

    public function showCars()
    { //todos
        $select = DB::select('SELECT * FROM cars_models ORDER BY price ASC');

        if ($select) {
            return $this->success($select);
        } else {
            return $this->error([], 'Não foi possível efetuar o cadastro', 401);
        }
    }

    public function showCar(Request $data)
    { //unico
        $values = ['id' => $data->id];
        $select = DB::select('SELECT * FROM cars_models WHERE id=:id ORDER BY price ASC', $values);

        if ($select) {
            return $this->success($select);
        } else {
            return $this->error([], 'Não foi possível efetuar o cadastro', 401);
        }
    }

    public function removeCar(Request $data)
    {
        $values = ['id' => $data->id];
        $delete = DB::delete('DELETE FROM cars_models WHERE id=:id', $values);

        if ($delete) {
            return $this->success($delete);
        } else {
            return $this->error([], 'Não foi possível efetuar o cadastro', 401);
        }
    }
}
