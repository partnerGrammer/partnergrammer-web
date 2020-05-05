<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Articulos
Route::get('/article', 'System\PostController@mainArticle');
Route::get('/articles/{id}', 'System\PostController@showMainArticle');
Route::get('/articles', 'System\PostController@getArticles');

//Proyectos
Route::get('/projects/{id}', 'System\PortfolioController@showMainProject');
Route::get('/projects', 'System\PortfolioController@getProjects');

