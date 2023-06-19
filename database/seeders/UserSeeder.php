<?php

namespace Database\Seeders;

use App\Models\DataUser;
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
    }
}
