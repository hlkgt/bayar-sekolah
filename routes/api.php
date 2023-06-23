<?php

use App\Http\Controllers\PerpustakaanController;
use App\Http\Controllers\TagihanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/dashboard/perpustakaan/get-buku', [PerpustakaanController::class, 'getBukus'])->name('getBukus');
// Route::post('/dashboard/tagihan-bulanan/payment', [TagihanController::class, 'payment'])->name('payment');
