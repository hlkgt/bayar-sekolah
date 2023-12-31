import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";

export default function PostDataUser({ className = "" }) {
    const userId = usePage().props.auth.user.id;
    const { data, setData, errors, processing, post } = useForm({
        user_id: userId,
        nama: "",
        kelas: "",
        jurusan: "",
        no_absen: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("post.data"));
    };

    const optKelas = [
        {
            value: "X",
            text: "X",
        },
        {
            value: "XI",
            text: "XI",
        },
        {
            value: "XII",
            text: "XII",
        },
        {
            value: "XIII",
            text: "XIII",
        },
    ];

    const optJurusan = [
        {
            value: "RPL",
            text: "RPL",
        },
        {
            value: "TKJ",
            text: "TKJ",
        },
        {
            value: "MM",
            text: "MM",
        },
        {
            value: "SIJA",
            text: "SIJA",
        },
    ];

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Informasi Pengguna
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Buat data kamu disini
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="nama_siswa" value="Nama" />

                    <TextInput
                        id="nama_siswa"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("nama", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        placeholder="Siapa namamu?"
                    />

                    <InputError className="mt-2" message={errors.nama} />
                </div>

                <div>
                    <InputLabel htmlFor="kelas" value="Kelas" />
                    <SelectInput
                        onChange={(e) => setData("kelas", e.target.value)}
                    >
                        <SelectInput.Option
                            disabled={true}
                            selected={true}
                            text={"Pilih Kelas"}
                        />
                        {optKelas.map((item, index) => {
                            return (
                                <SelectInput.Option
                                    key={index}
                                    value={item.value}
                                    text={item.text}
                                />
                            );
                        })}
                    </SelectInput>
                    <InputError className="mt-2" message={errors.kelas} />
                </div>

                <div>
                    <InputLabel htmlFor="jurusan" value="Jurusan" />
                    <SelectInput
                        onChange={(e) => setData("jurusan", e.target.value)}
                    >
                        <SelectInput.Option
                            disabled={true}
                            selected={true}
                            text={"Pilih Jurusan"}
                        />
                        {optJurusan.map((item, index) => {
                            return (
                                <SelectInput.Option
                                    key={index}
                                    value={item.value}
                                    text={item.text}
                                />
                            );
                        })}
                    </SelectInput>
                    <InputError className="mt-2" message={errors.jurusan} />
                </div>

                <div>
                    <InputLabel htmlFor="no_absen" value="No Absen" />

                    <TextInput
                        id="no_absen"
                        type="number"
                        min="1"
                        max="35"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("no_absen", e.target.value)}
                        required
                        autoComplete="username"
                        placeholder="Berapa Nomor Absenmu?"
                    />

                    <InputError className="mt-2" message={errors.no_absen} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Buat Data
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
