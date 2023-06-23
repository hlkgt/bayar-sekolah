import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Card from "@/Components/Card";
import SuccessButton from "@/Components/SuccessButton";
import SecondaryButton from "@/Components/SecondaryButton";

const Absen = ({ auth, flash, tagihans }) => {
    const handleGetPayment = (user_id, bulan) => {
        router.get(route("get.payment"), {
            user_id: user_id,
            bulan: bulan,
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Tagihan Bulanan"}
            flash={flash}
        >
            <Head title="Tagihan Bulanan" />
            <div className="rounded-md bg-white p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
                {tagihans.map((tagihan, index) => {
                    return (
                        <div
                            className="col-span-1 md:col-span-6 lg:col-span-3"
                            key={index}
                        >
                            <Card>
                                <h1 className="text-2xl capitalize font-semibold mb-2">
                                    {tagihan.bulan}
                                </h1>
                                <p>Nominal : Rp.{tagihan.nominal}</p>
                                <p>
                                    Status :
                                    {tagihan.status_pembayaran
                                        ? "Lunas"
                                        : "Belum Dibayar"}
                                </p>
                                {tagihan.tanggal_pembayaran ? (
                                    <p>{tagihan.tanggal_pembayaran}</p>
                                ) : (
                                    ""
                                )}
                                {tagihan.status_pembayaran ? (
                                    <SuccessButton
                                        className="mt-2 w-full"
                                        onClick={() =>
                                            alert(
                                                "tagihan bulan " +
                                                    tagihan.bulan +
                                                    " LUNAS"
                                            )
                                        }
                                    >
                                        Lunas
                                    </SuccessButton>
                                ) : (
                                    <SecondaryButton
                                        className="mt-2 w-full"
                                        onClick={() =>
                                            handleGetPayment(
                                                auth.user.id,
                                                tagihan.bulan
                                            )
                                        }
                                    >
                                        Bayar Sekarang
                                    </SecondaryButton>
                                )}
                            </Card>
                        </div>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
};

export default Absen;
