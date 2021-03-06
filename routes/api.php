<?php

use Illuminate\Http\Request;

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

Route::post('/register', 'Auth\RegisterController@create');
Route::post('/login', 'Auth\LoginController@login');
Route::resource('/product','ProductController');
Route::get('/schoolist','ProductController@getSchoolList');
Route::get('/categorylist','ProductController@getCategoryList');
Route::resource('/items','InvoiceItemsController');
Route::get('/mystore','ProductController@getMyStore');
Route::get('/userstore/{user_account}','ProductController@getSellerStore');
Route::resource('/rating','RatingController');
Route::post('/itemfeedback','RatingController@ItemfFeedBack');
Route::resource('/question','ProductQuestionsController');
Route::resource('/invoice','InvoicesController');
Route::post('/addChatUser','ChatController@addChatUser');
Route::get('/getChatUser','ChatController@getChatUser');
Route::get('/getChatContent','ChatController@getChatContent');
Route::post('/postMessage','ChatController@postMessage');
Route::get('/Getnotify','NotificationController@Getnotify');
Route::get('/MarkRead','NotificationController@MarkRead');
Route::get('/ReadChannel','ChatController@ReadChannel');
// auth
Route::post('/auth/refresh',['uses'=>'Auth\AuthController@refresh','middleware'=>'jwt.auth']);