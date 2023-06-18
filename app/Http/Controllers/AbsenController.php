<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use App\Models\DataUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AbsenController extends Controller
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
            return Inertia::render('Absen');
        }
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
        $validated = $request->validate([
            'keterangan' => 'required',
            'deskripsi' => 'required|min:10'
        ], [
            'keterangan.required' => 'Anda belum memilih keterangan',
            'deskripsi.required' => 'Deskripsi masih kosong',
            'deskripsi.min' => 'Deskripsi minimal 10 karakter',
        ]);

        Absen::insert([
            'user_id' => $request->user_id,
            'tanggal' => $request->tanggal,
            'jam' => $request->jam,
            'keterangan' => $validated['keterangan'],
            'deskripsi' => $validated['deskripsi']
        ]);

        return redirect()->route('dashboard')->with('success', 'Absen berhasil dipost');
    }

    /**
     * Display the specified resource.
     */
    public function show(Absen $absen)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Absen $absen)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Absen $absen)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Absen $absen)
    {
        //
    }
}
