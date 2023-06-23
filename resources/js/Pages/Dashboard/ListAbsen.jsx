const ListAbsen = ({ absens }) => {
    let number = 1;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Tanggal</th>
                    <th>Jam</th>
                    <th>Nama</th>
                    <th>Tekhnik</th>
                    <th>Keterangan</th>
                    <th>Deskripsi</th>
                </tr>
            </thead>
            <tbody>
                {absens ? (
                    absens.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{number++}</th>
                                <td>{item.tanggal}</td>
                                <td>{item.jam}</td>
                                <td>{item.nama}</td>
                                <td>
                                    {item.kelas} {item.jurusan}
                                </td>
                                <td>{item.keterangan}</td>
                                <td>{item.deskripsi}</td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <th colSpan={6} className="text-center">
                            Belum Ada Absen
                        </th>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default ListAbsen;
