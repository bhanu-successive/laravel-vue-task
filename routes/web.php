<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/registration-verification', function(Request $request)
{
     return redirect('/?verify_token='. $request->query('t'));
});


Route::get('/reset-password', function(Request $request)
{
     return redirect('/?reset_pwd='. $request->query('reset_pwd'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
