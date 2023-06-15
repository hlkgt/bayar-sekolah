import { Link } from "@inertiajs/react";

export default function Guest({ linkActive, children }) {
    return (
        <div className="min-h-screen flex justify-center items-center pt-6 sm:pt-0 bg-slate-700 px-4">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="w-full grid grid-cols-2 text-center capitalize font-semibold mb-6">
                    <Link
                        className={
                            (linkActive === "masuk"
                                ? "bg-blue-600 col-span-1 rounded-lg text-white "
                                : "") + "py-3"
                        }
                        href={route("login")}
                    >
                        masuk
                    </Link>
                    <Link
                        className={
                            (linkActive === "daftar"
                                ? "bg-blue-600 col-span-1 rounded-lg text-white "
                                : "") + "py-3"
                        }
                        href={route("register")}
                    >
                        daftar
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
