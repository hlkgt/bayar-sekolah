import { useState, Fragment } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SuccessButton from "@/Components/SuccessButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import SelectInput from "@/Components/SelectInput";

const Perpustakaan = ({ auth, flash, kategoris, dataUser, today }) => {
    const { setData, processing, errors, post } = useForm({
        nama_peminjam: auth.user.name,
        user_id: auth.user.id,
        tanggal_peminjaman: today.date,
        jam_peminjaman: today.time,
        kategori_buku: "",
        nama_buku: "",
        jumlah_dipinjam: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("create.peminjaman"));
    };

    const [listBukus, setListBukus] = useState({});
    const handleGetBukus = async (value) => {
        setData("kategori_buku", value);
        await fetch(`/api/dashboard/perpustakaan/get-buku?kategori_id=${value}`)
            .then((response) => response.json())
            .then((data) => {
                setListBukus(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <AuthenticatedLayout user={auth.user} header={"Perpustakaan"} flash={flash}>
            <Head title="Perpustakaan" />
            <div className="rounded-md bg-white p-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Nama Siswa</InputLabel>
                        <TextInput
                            type="text"
                            value={auth.user.name}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Kelas</InputLabel>
                        <TextInput
                            type="text"
                            value={dataUser.kelas}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Jurusan</InputLabel>
                        <TextInput
                            type="text"
                            value={dataUser.jurusan}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Tanggal Peminjaman</InputLabel>
                        <TextInput
                            type="date"
                            value={today.date}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Jam Peminjaman</InputLabel>
                        <TextInput
                            type="time"
                            value={today.time}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Kategori Buku</InputLabel>
                        <SelectInput
                            onChange={(e) => {
                                handleGetBukus(e.target.value);
                            }}
                            autoFocus={true}
                        >
                            <SelectInput.Option
                                disabled={true}
                                selected={true}
                                text={"Pilih Kategori Buku"}
                            />
                            {kategoris.map((kategori, index) => {
                                return (
                                    <SelectInput.Option
                                        key={index + 5}
                                        value={kategori.id}
                                        text={kategori.kategori}
                                    />
                                );
                            })}
                        </SelectInput>
                        <InputError
                            message={errors.kategori_buku}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Buku Pinjaman</InputLabel>
                        <SelectInput
                            onChange={(e) => {
                                setData("nama_buku", e.target.value);
                            }}
                        >
                            {listBukus.length === undefined ? (
                                <SelectInput.Option
                                    disabled={true}
                                    selected={true}
                                    text={"Pilih Kategori Terlebih Dahulu"}
                                />
                            ) : (
                                <Fragment>
                                    <SelectInput.Option
                                        disabled={true}
                                        selected={true}
                                        text={"Pilih Buku Pinjaman"}
                                    />
                                    {listBukus.map((buku, index) => {
                                        return (
                                            <SelectInput.Option
                                                key={index + 13}
                                                value={buku.nama_buku}
                                                text={buku.nama_buku}
                                            />
                                        );
                                    })}
                                </Fragment>
                            )}
                        </SelectInput>
                        <InputError
                            message={errors.nama_buku}
                            className="mt-2"
                        />
                    </div>

                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Jumlah Buku</InputLabel>
                        <TextInput
                            type="number"
                            min="1"
                            max="35"
                            placeholder="Masukkan Jumlah Buku Yang Dipinjam"
                            onChange={(e) =>
                                setData("jumlah_dipinjam", e.target.value)
                            }
                        ></TextInput>
                        <InputError
                            message={errors.jumlah_dipinjam}
                            className="mt-2"
                        />
                    </div>
                    <SuccessButton
                        disabled={processing}
                        type="submit"
                        className="w-full"
                    >
                        pinjam sekarang
                    </SuccessButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Perpustakaan;
