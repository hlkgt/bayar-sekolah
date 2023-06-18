<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\DataUser;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $data_user = DataUser::where('user_id', auth()->user()->id)->first();
        return Inertia::render('Profile/Edit', [
            'data_user' => $data_user,
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /** 
     * Post Data User
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required',
            'kelas' => 'required',
            'jurusan' => 'required',
            'no_absen' => 'required|min:1|max:35'
        ], [
            'nama.required' => 'Nama tidak boleh kosong',
            'kelas.required' => 'Kelas tidak boleh kosong',
            'jurusan.required' => 'Jurusan tidak boleh kosong',
            'no_absen.required' => 'Absen tidak boleh kosong',
            'no_absen.min' => 'Absen kurang dari 1',
            'no_absen.max' => 'Absen lebih dari 35',
        ]);

        DataUser::insert([
            'user_id' => $request->user_id,
            'nama' => $validated['nama'],
            'kelas' => $validated['kelas'],
            'jurusan' => $validated['jurusan'],
            'no_absen' => $validated['no_absen'],
        ]);

        return redirect()->back()->with('success', 'Data Berhasil Ditambahkan');
    }

    /**
     * Update Data User
     */
    public function updateData(Request $request)
    {
        $data_user = DataUser::where('user_id', $request->user_id)->first();
        $data_user->nama = $request->name;
        $data_user->kelas = $request->kelas;
        $data_user->jurusan = $request->jurusan;
        $data_user->no_absen = $request->no_absen;
        return redirect()->back()->with('success', 'Data Berhasil Diperbarui');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return redirect()->route('profile.edit')->with('success','Akun Berhasil Diperbarui');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
