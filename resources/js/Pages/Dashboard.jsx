import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ListAbsen from "./Dashboard/ListAbsen";
import ListTagihan from "./Dashboard/ListTagihan";
import ListPinjaman from "./Dashboard/ListPinjaman";

export default function Dashboard({
    auth,
    absens,
    tagihans,
    pinjamans,
    flash,
}) {
    console.log(absens);
    console.log(pinjamans);
    console.log(tagihans);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Dashboard"}
            flash={flash}
        >
            <Head title="Dashboard" />

            <div className="p-4">
                <div className="max-w-7xl mx-auto flex flex-col gap-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <ListAbsen absens={absens} />
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <ListPinjaman pinjamans={pinjamans} />
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <ListTagihan tagihans={tagihans} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
