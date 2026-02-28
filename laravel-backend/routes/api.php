<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/projects',[ProjectController::class,'index']);
    Route::post('/projects',[ProjectController::class,'store']);

    Route::post('/tasks',[TaskController::class,'store']);
    Route::put('/tasks/{id}',[TaskController::class,'update']);
    Route::get('/my-tasks',[TaskController::class,'myTasks']);

});