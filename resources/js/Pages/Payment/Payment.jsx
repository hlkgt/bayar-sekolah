import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SuccessButton from "@/Components/SuccessButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import { Inertia } from "@inertiajs/inertia";

const Payment = ({ auth, flash, dataUser, tagihan }) => {
    const { post, processing } = useForm({
        user_id: auth.user.id,
        bulan: tagihan.bulan,
    });
    const handlePayment = async (e) => {
        e.preventDefault();
        post(route("payment"));
    };
    return (
        <AuthenticatedLayout user={auth.user} header={"Absen"} flash={flash}>
            <Head title="Absen" />
            <div className="rounded-md bg-white p-5">
                <form onSubmit={handlePayment}>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Nama Siswa</InputLabel>
                        <TextInput
                            type="text"
                            value={dataUser.nama}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Kelas Siswa</InputLabel>
                        <TextInput
                            type="text"
                            value={dataUser.kelas}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Jurusan Siswa</InputLabel>
                        <TextInput
                            type="text"
                            value={dataUser.jurusan}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Bulan Yang Akan Dibayar</InputLabel>
                        <TextInput
                            type="text"
                            value={tagihan.bulan}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <InputLabel>Nominal</InputLabel>
                        <TextInput
                            type="number"
                            value={tagihan.nominal}
                            readOnly={true}
                        ></TextInput>
                    </div>
                    <SuccessButton
                        type="submit"
                        className="w-full mb-1"
                        disabled={processing}
                    >
                        bayar sekarang
                    </SuccessButton>
                    <Link href={route("tagihan.index")} disabled={processing}>
                        <SecondaryButton className="w-full">
                            Kembali Ke List Tagihan
                        </SecondaryButton>
                    </Link>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Payment;
