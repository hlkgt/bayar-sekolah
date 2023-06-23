import { Fragment } from "react";

const ListTagihan = ({ tagihans }) => {
    let number = 1;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Bulan</th>
                    <th>Nominal</th>
                    <th>Status Pembayaran</th>
                    <th>Tanggal Pembayaran</th>
                </tr>
            </thead>
            <tbody>
                {tagihans ? (
                    tagihans.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{number++}</th>
                                <td>{item.bulan}</td>
                                <td>{item.nominal}</td>
                                {item.status_pembayaran ? (
                                    <Fragment>
                                        <td className="text-teal-600">Lunas</td>
                                        <td>{item.tanggal_pembayaran}</td>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <td className="text-red-600">
                                            Belum Dibayar
                                        </td>
                                        <td>Belum Ada Pembayaran</td>
                                    </Fragment>
                                )}
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <th colSpan={6} className="text-center">
                            Belum Ada Tagihan
                        </th>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default ListTagihan;
