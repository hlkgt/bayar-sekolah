import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SuccessButton from "@/Components/SuccessButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import SelectInput from "@/Components/SelectInput";

const Absen = ({ auth, flash }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        tanggal: "",
        jam: "",
        keterangan: "",
        deskripsi: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("absen.store"));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={"Absen"} flash={flash}>
            <Head title="Absen" />
            <div className="rounded-md bg-white p-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Nama Siswa</InputLabel>
                        <TextInput
                            type="text"
                            value={auth.user.name}
                            readOnly={true}
                            id="name"
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Tanggal Sekarang</InputLabel>
                        <TextInput
                            type="date"
                            onChange={(e) => setData("tanggal", e.target.value)}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Jam Sekarang</InputLabel>
                        <TextInput
                            type="time"
                            onChange={(e) => setData("jam", e.target.value)}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Keterangan Siswa</InputLabel>
                        <SelectInput
                            onChange={(e) =>
                                setData("keterangan", e.target.value)
                            }
                            autoFocus={true}
                        >
                            <SelectInput.Option
                                disabled={true}
                                selected={true}
                                text={"Pilih Keterangan"}
                            />
                            <SelectInput.Option
                                value={"masuk"}
                                text={"masuk"}
                            />
                            <SelectInput.Option value={"izin"} text={"izin"} />
                        </SelectInput>
                        <InputError
                            message={errors.keterangan}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Pesan Singkat</InputLabel>
                        <textarea
                            className="textarea textarea-bordered"
                            placeholder="Berikan pesan singkat"
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                        ></textarea>
                        <InputError
                            message={errors.deskripsi}
                            className="mt-2"
                        />
                    </div>
                    <SuccessButton
                        disabled={processing}
                        type="submit"
                        className="w-full"
                    >
                        absen sekarang
                    </SuccessButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Absen;
