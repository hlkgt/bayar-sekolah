import SecondaryButton from "@/Components/SecondaryButton";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListPinjaman = ({ pinjamans }) => {
    let number = 1;
    return (
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tanggal</th>
                        <th>Jam</th>
                        <th>Nama</th>
                        <th>Buku</th>
                        <th>Status Pengembalian</th>
                    </tr>
                </thead>
                <tbody>
                    {pinjamans ? (
                        pinjamans.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{number++}</th>
                                    <td>{item.tanggal_peminjaman}</td>
                                    <td>{item.jam_peminjaman}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.nama_buku}</td>
                                    <td>
                                        <SecondaryButton className="w-20">
                                            <FontAwesomeIcon icon={faEye} />
                                        </SecondaryButton>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <th colSpan={6} className="text-center">
                                Belum Ada Pinjaman
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
    );
};

export default ListPinjaman;
