<?php

namespace Database\Seeders;

use App\Models\DataUser;
use App\Models\Tagihan;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            'name' => 'Leo Marselio',
            'email' => 'leo@gmail.com',
            'password' => Hash::make('leoleoleo')
        ]);
        DataUser::insert([
            'user_id' => 1,
            'nama' => 'Leo Marselio',
            'kelas' => 'XIII',
            'jurusan' => 'SIJA',
            'no_absen' => '18',
        ]);
        $tagihan_bulanans = [
            ['bulan' => 'januari'],
            ['bulan' => 'februari'],
            ['bulan' => 'maret'],
            ['bulan' => 'april'],
            ['bulan' => 'mei'],
            ['bulan' => 'juni'],
            ['bulan' => 'juli'],
            ['bulan' => 'agustus'],
            ['bulan' => 'september'],
            ['bulan' => 'oktober'],
            ['bulan' => 'november'],
            ['bulan' => 'desember'],
        ];
        $tagihan_bulanans = collect($tagihan_bulanans)->map(function ($bulan) {
            return ([
                'user_id' => 1,
                'bulan' => $bulan['bulan'],
                'nominal' => 1000
            ]);
        });
        Tagihan::insert($tagihan_bulanans->toArray());
    }
}
