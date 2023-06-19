<?php

namespace Database\Seeders;

use App\Models\Buku;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bukus = [
            ['kategori_buku_id' => 1, 'nama_buku' => 'bahasa indonesia'],
            ['kategori_buku_id' => 1, 'nama_buku' => 'bahasa inggris'],
            ['kategori_buku_id' => 2, 'nama_buku' => 'kisah cinta'],
            ['kategori_buku_id' => 2, 'nama_buku' => 'kisah kelam'],
            ['kategori_buku_id' => 3, 'nama_buku' => 'malin kundang'],
            ['kategori_buku_id' => 3, 'nama_buku' => 'danau toba'],
            ['kategori_buku_id' => 4, 'nama_buku' => 'sikancil'],
            ['kategori_buku_id' => 4, 'nama_buku' => 'kancil mencuri timun'],
        ];
        $bukus = collect($bukus)->map(function ($buku) {
            return ([
                'kategori_buku_id' => $buku['kategori_buku_id'],
                'nama_buku' => $buku['nama_buku']
            ]);
        });
        Buku::insert($bukus->toArray());
    }
}
