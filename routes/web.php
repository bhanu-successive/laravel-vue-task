<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

Route::any('/', function (Request $request) {

    // Registration verification
    if ($request->query('t', null)) {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->patch(env('APP_BASE_URL').'/v1/public/account', [
            'verify_code' => $request->query('t')
        ]);
        if ($response->successful() ) {
            return redirect('/?redirect=registration-verification&status=SUCCESS');
        } else {
            return redirect('/?redirect=registration-verification&status=ERROR');
        }
    }
    /**
     * Forgot  password
     */
    if ($request->query('reset_pwd', null)) {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->patch(env('APP_BASE_URL').'v1/public/forgot_password', [
            'verify_code' => $request->query('reset_pwd')
        ]);

        if ($response->successful() ) {
            return redirect('/?redirect=reset-password&status=SUCCESS');
        } else {
            return redirect('/?redirect=reset-password&status=ERROR');
        }
    }

    return view('welcome');
});

Auth::routes();

Route::get('/registration-verification', function(Request $request)
{
    /**
     * Making patch from server itself in order to avoid the CORS issue from frontend
     *
     */
    return redirect('/?redirect=registration-verification&status=true');


});


Route::get('/reset-password', function(Request $request)
{
     return redirect('/?reset_pwd='. $request->query('reset_pwd'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
