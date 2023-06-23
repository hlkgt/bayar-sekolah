<?php

use App\Http\Controllers\AbsenController;
use App\Http\Controllers\PerpustakaanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagihanController;
use App\Models\Absen;
use App\Models\Perpustakaan;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    $absen = DB::table('absens')
        ->join('users', 'users.id', '=', 'absens.user_id')
        ->select('users.*', 'absens.*')
        ->get();
    return Inertia::render('Dashboard', ['absen' => $absen]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/dashboard/profile', [ProfileController::class, 'store'])->name('post.data');
    Route::patch('/dashboard/profile/update', [ProfileController::class, 'updateData'])->name('update.data');
    Route::patch('/dashboard/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/dashboard/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard/absen-siswa', [AbsenController::class, 'index'])->name('absen.index');
    Route::post('/dashboard/absen-siswa/post', [AbsenController::class, 'store'])->name('absen.store');

    Route::get('/dashboard/perpustakaan', [PerpustakaanController::class, 'index'])->name('perpustakaan.index');
    Route::post('/dashboard/perpustakaan', [PerpustakaanController::class, 'store'])->name('create.peminjaman');

    Route::get('/dashboard/tagihan-bulanan', [TagihanController::class, 'index'])->name('tagihan.index');
    Route::get('/dashboard/tagihan-bulanan/payment', [TagihanController::class, 'getPayment'])->name('get.payment');
    Route::post('/dashboard/tagihan-bulanan/payment', [TagihanController::class, 'payment'])->name('payment');
});

require __DIR__ . '/auth.php';
