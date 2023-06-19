<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\DataUser;
use App\Models\KategoriBuku;
use App\Models\Perpustakaan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PerpustakaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data_user = DataUser::where('user_id', auth()->user()->id)->first();
        if ($data_user === null) {
            return redirect()->route('profile.edit')->with('danger', 'Oops! Sepertinya data kamu belum lengkap');
        } else {
            $kategoris = KategoriBuku::all();
            return Inertia::render('Perpustakaan', ['kategoris' => $kategoris, 'dataUser' => $data_user]);
        }
    }

    public function getBukus(Request $request)
    {
        $bukus = Buku::where('kategori_buku_id', $request->query('kategori_id'))->get();
        return response()->json($bukus);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'kategori_buku' => 'required',
            'nama_buku' => 'required',
            'jumlah_dipinjam' => 'required',
        ], [
            'kategori_buku' => 'Sepertinya kamu belum memilih kategori',
            'nama_buku' => 'Sepertinya kamu belum memilih buku apapun',
            'jumlah_dipinjam' => 'Kamu belum memasukkan jumlah buku pinjamanmu',
        ]);
        Perpustakaan::insert([
            'nama_peminjam' => $request->nama_peminjam,
            'user_id' => $request->user_id,
            'tanggal_peminjaman' => $request->tanggal_peminjaman,
            'jam_peminjaman' => $request->jam_peminjaman,
            'kategori_buku' => $validate['kategori_buku'],
            'nama_buku' => $validate['nama_buku'],
            'jumlah_dipinjam' => $validate['jumlah_dipinjam'],
        ]);
        return redirect()->route('dashboard')->with('success', 'Data peminjaman berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Perpustakaan $perpustakaan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Perpustakaan $perpustakaan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Perpustakaan $perpustakaan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Perpustakaan $perpustakaan)
    {
        //
    }
}
