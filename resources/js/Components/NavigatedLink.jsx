import { faSchool, faXmark } from "@fortawesome/free-solid-svg-icons";
import { iconLink } from "@/Icon/LinkIcon";
import { Link, router } from "@inertiajs/react";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigatedLink = ({ isShow, handleShow }) => {
    const [showSidebar, setShowSidebar] = useState();
    const link = [
        {
            icon: "absen",
            name: "absen",
            path: "absen-siswa",
        },
        {
            icon: "tagihan",
            name: "tagihan",
            path: "bulanan",
        },
        {
            icon: "bukuPinjaman",
            name: "perpustakaan",
            path: "perpustakaan",
        },
        {
            icon: "pengguna",
            name: "profile",
            path: "profile",
        },
        {
            icon: "keluar",
            name: "keluar",
            path: "logout",
        },
    ];
    const logout = (e) => {
        e.preventDefault();
        router.post("logout");
    };
    return (
        <Fragment>
            <div
                className={
                    (isShow ? "w-16 " : "w-52") +
                    " min-h-screen bg-slate-700 transition-all duration-700 ease-in-out hidden lg:block"
                }
            >
                <aside className={(isShow ? "w-16 " : "w-52") + " fixed"}>
                    <div className="h-16 flex justify-center items-center text-2xl font-bold text-slate-100">
                        {isShow ? (
                            <FontAwesomeIcon icon={faSchool} />
                        ) : (
                            <div className="flex items-center gap-2 px-2">
                                <FontAwesomeIcon icon={faSchool} />
                                <Link href="/dashboard">BayarSekolah</Link>
                            </div>
                        )}
                    </div>
                    {isShow
                        ? link.map((item, index) => {
                              return (
                                  <div
                                      className="flex justify-center text-lg font-bold text-slate-100 px-4 capitalize hover:bg-white hover:text-slate-600 py-4 transition-colors duration-500 ease-in-out relative group"
                                      key={index}
                                  >
                                      <p className="scale-0 group-hover:scale-100 text-white absolute bg-slate-700 p-1 top-3 left-0 group-hover:left-20 rounded-md transition-all duration-500 ease-in-out">
                                          {item.name}
                                      </p>
                                      {item.icon === "keluar" ? (
                                          <form onSubmit={logout}>
                                              <button type="submit">
                                                  <FontAwesomeIcon
                                                      icon={iconLink[item.icon]}
                                                  />
                                              </button>
                                          </form>
                                      ) : (
                                          <Link
                                              href={"/dashboard/" + item.path}
                                          >
                                              <FontAwesomeIcon
                                                  icon={iconLink[item.icon]}
                                              />
                                          </Link>
                                      )}
                                  </div>
                              );
                          })
                        : link.map((item, index) => {
                              return (
                                  <div
                                      className="flex items-center text-lg font-bold text-slate-100 px-8 gap-2 capitalize hover:bg-white hover:text-slate-600 py-4 transition-colors duration-500 ease-in-out"
                                      key={index}
                                  >
                                      <FontAwesomeIcon
                                          icon={iconLink[item.icon]}
                                      />
                                      {item.icon === "keluar" ? (
                                          <form onSubmit={logout}>
                                              <button type="submit">
                                                  {item.name}
                                              </button>
                                          </form>
                                      ) : (
                                          <Link
                                              href={"/dashboard/" + item.path}
                                          >
                                              {item.name}
                                          </Link>
                                      )}
                                  </div>
                              );
                          })}
                </aside>
            </div>
            <aside
                className={
                    (isShow ? "translate-x-0" : "-translate-x-[60rem]") +
                    " w-full min-h-screen bg-slate-700 transition-all duration-700 ease-in-out fixed block lg:hidden z-50"
                }
            >
                <div className="h-16 flex justify-center items-center text-2xl font-bold text-slate-100 relative">
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="absolute left-12"
                        onClick={handleShow}
                    />
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faSchool} />
                        <Link href="/dashboard">BayarSekolah</Link>
                    </div>
                </div>
                {link.map((item, index) => {
                    return (
                        <div
                            className="flex items-center md:justify-center text-lg font-bold text-slate-100 px-8 gap-2 capitalize hover:bg-white hover:text-slate-600 py-4 transition-colors duration-500 ease-in-out"
                            key={index}
                        >
                            <FontAwesomeIcon icon={iconLink[item.icon]} />
                            {item.icon === "keluar" ? (
                                <form onSubmit={logout}>
                                    <button type="submit">{item.name}</button>
                                </form>
                            ) : (
                                <Link href={"/dashboard/" + item.path}>
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </aside>
        </Fragment>
    );
};

export default NavigatedLink;
