<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Web\WebController@index')->name('web.index');

Auth::routes();

Route::get('/admin', 'AdminController@index')->name('admin');

//POSTS
Route::resource('posts', 'System\PostController');

//PORTAFOLIOS
Route::resource('portfolios', 'System\PortfolioController');

//CATEGORIAS
Route::resource('categories', 'System\CategoryController');


