<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('perpustakaans', function (Blueprint $table) {
            $table->id();
            $table->string('nama_peminjam');
            $table->unsignedBigInteger('user_id');
            $table->date('tanggal_peminjaman');
            $table->time('jam_peminjaman');
            $table->string('kategori_buku');
            $table->string('nama_buku');
            $table->integer('jumlah_dipinjam');
            $table->boolean('status_pengembalian')->default(false);
            $table->date('tanggal_pengembalian')->nullable();
            $table->time('jam_pengembalian')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perpustakaans');
    }
};
