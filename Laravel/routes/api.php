<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProductController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);

Route::group(['middleware'=>'api'],function(){
    // After logged in all are route here 
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
    Route::get('me', [AuthController::class,'me']);
    Route::get('get-users', [AuthController::class,'getUsers']);
    Route::get('getproject', [ProjectController::class,'projectList']);
    Route::get('getprojectInfo/{id}', [ProjectController::class,'projectInformation']);
    Route::get('gettaskInfo/{id}', [ProjectController::class,'taskInformation']);
    Route::post('addproject', [ProjectController::class,'addProject']);
    Route::post('add-task', [ProjectController::class,'addTask']);
    Route::post('assign-task', [ProjectController::class,'assignTask']);
    Route::post('unassign-task', [ProjectController::class,'unAssignTask']);
    Route::get('get-assign/{id}', [ProjectController::class,'getAssign']);
    
    // Product module
    Route::post('add-product-category', [ProductController::class,'productCategoryStore']);
    Route::get('product-category/{id?}', [ProductController::class,'productCategory']);
});
