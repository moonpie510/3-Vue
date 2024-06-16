<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name' => 'Ivan',
                'age' => 20,
                'job' => 'Web Developer'
            ],
            [
                'id' => 2,
                'name' => 'Max',
                'age' => 25,
                'job' => 'Singer'
            ],
            [
                'id' => 3,
                'name' => 'Oleg',
                'age' => 18,
                'job' => 'Doctor'
            ]
        ];
        return $persons;
    }
}
