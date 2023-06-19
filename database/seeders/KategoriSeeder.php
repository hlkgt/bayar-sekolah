<?php

namespace Database\Seeders;

use App\Models\KategoriBuku;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kategori_bukus = [
            ['kategori' => 'paket'],
            ['kategori' => 'novel'],
            ['kategori' => 'cerita rakyat'],
            ['kategori' => 'cerita dongeng'],
        ];
        $kategori_bukus = collect($kategori_bukus)->map(function ($kategori) {
            return ([
                'kategori' => $kategori['kategori']
            ]);
        });
        KategoriBuku::insert($kategori_bukus->toArray());
    }
}
