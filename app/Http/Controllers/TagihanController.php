<?php

namespace App\Http\Controllers;

use App\Models\DataUser;
use App\Models\Tagihan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TagihanController extends Controller
{
    public function __construct()
    {
        \Midtrans\Config::$serverKey = config('services.midtrans.server');
        \Midtrans\Config::$isProduction = config('services.midtrans.isProduction');
        \Midtrans\Config::$isSanitized = config('services.midtrans.isSanitize');
        \Midtrans\Config::$is3ds = config('services.midtrans.is3ds');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tagihans = Tagihan::where('user_id', auth()->user()->id)->get();
        return Inertia::render('Tagihan', ['tagihans' => $tagihans]);
    }

    public function getPayment(Request $request)
    {
        $data_user = DataUser::where('user_id', $request->user_id)->first();
        $tagihan = Tagihan::where('bulan', $request->bulan)->first();
        return Inertia::render('Payment/Payment', ['dataUser' => $data_user, 'tagihan' => $tagihan]);
    }

    public function payment(Request $request)
    {
        // DB::transaction(function () use ($request) {
        //     $data_user = DataUser::where('user_id', $request->user_id)->first();
        //     $payload = [
        //         'transaction_details' => [
        //             'order_id' => 'SANBOX-' . uniqid() . "bayar-sekolah",
        //             'gross_amount' => 1000
        //         ],
        //         'customer_details' => [
        //             'first_name' => $data_user->nama,
        //             'last_name' => $data_user->kelas . ' ' . $data_user->jurusan
        //         ]
        //     ];
        //     $snapToken = \Midtrans\Snap::getSnapToken($payload);
        //     $this->response = $snapToken;
        // });
        // return response()->json($this->response);

        $tagihan = Tagihan::where('bulan', $request->bulan)->first();
        $tagihan->status_pembayaran = true;
        $tagihan->tanggal_pembayaran = Carbon::now()->format('Y-m-d');
        $tagihan->save();
        return redirect()->route('tagihan.index')->with('success', 'tagihan pada bulan ' . $tagihan->bulan . ' telah dibayarkan');
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tagihan $tagihan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tagihan $tagihan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tagihan $tagihan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tagihan $tagihan)
    {
        //
    }
}
