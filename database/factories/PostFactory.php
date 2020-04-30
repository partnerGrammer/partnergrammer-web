<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'category_id' => 1,
        'title' => $faker->sentence($nbWords = 4, $variableNbWords = true),
        'banner' => $faker->imageUrl($width = 640, $height = 480),
        'excerpt' => $faker->text($maxNbChars = 200),
        'body' => $faker->text($maxNbChars = 700),
        'published' => 0,
        
    ];
});
