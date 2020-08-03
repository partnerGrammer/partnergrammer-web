<?php

use App\Contact;
use App\Partner;
use App\Mail\Contact as ContactMail;
use App\Mail\Partner as PartnerMail;
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

//CONTACT MAIL
Route::post('email/contact', function(Request $request){
    $data = json_decode(file_get_contents("php://input"));

    $contact = new Contact();
    $contact->name = $data->name;
    $contact->email = $data->email;
    $contact->information = $data->information;
    $contact->message = $data->message;
    $contact->save();

    Mail::to('eduardo@partnergrammer.com', 'Contacto')->send(new ContactMail($data));
});

//PARTNER MAIL
Route::post('email/partner', function(Request $request){
    $data = json_decode(file_get_contents("php://input"));

    $partner = new Partner();
    $partner->name = $data->name;
    $partner->lastName = $data->lastName;
    $partner->empresa = $data->empresa;
    $partner->email = $data->email;
    $partner->sector = $data->sector;
    $partner->emailComercial = $data->emailComercial;
    $partner->telephone = $data->telephone;
    $partner->number = $data->number;
    $partner->city = $data->city;
    $partner->comments = $data->comments;
    $partner->save();

    Mail::to('eduardo@partnergrammer.com', 'Partner')->send(new PartnerMail($data));
});
