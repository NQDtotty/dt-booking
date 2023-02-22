import React, { useState } from 'react'

export default function TripList() {
    const [placeFrom, setPlaceFrom] = useState("");
    const [placeTo, setPlaceTo] = useState("");

    const list = [
        { placeFrom: "Sài Gòn", placeTo: "Đà Lạt", distance: "310km", time: "8h", price: "300.000đ", timeStart: "8 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Trà Ôn", distance: "161km", time: "3h16'", price: "130.000đ", timeStart: "9 giờ 30 phút " },
        { placeFrom: "Sài Gòn", placeTo: "Cần Thơ", distance: "166m", time: "3h15'", price: "135.000đ", timeStart: "13 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Ngã Năm", distance: "224km", time: "4h30'", price: "235.000đ", timeStart: "10 giờ 15 phút" },
        { placeFrom: "Sài Gòn", placeTo: "Đơn Dương", distance: "290km", time: "8h", price: "285.000đ", timeStart: "16 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Phan Rang", distance: "326km", time: "7h", price: "305.000đ", timeStart: "7 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Vĩnh Châu", distance: "247km", time: "4h51'", price: "250.000đ", timeStart: "12 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Vĩnh Thuận", distance: "283km", time: "5h23'", price: "275.000đ", timeStart: "13 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Tây Ninh", distance: "122km", time: "3h", price: "135.000đ", timeStart: "16 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Mũi né", distance: "205km", time: "4h30'", price: "200.000đ", timeStart: "15 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Quảng Ngãi", distance: "812km", time: "14h57''", price: "375.000đ", timeStart: "18 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Qui Nhơn", distance: "643km", time: "11h36'", price: "325.000đ", timeStart: "14 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Đại Lộc", distance: "942km", time: "17h29'", price: "380.000đ", timeStart: "10 giờ" },
        { placeFrom: "Sài Gòn", placeTo: "Ninh Hòa", distance: "469km", time: "9h", price: "285.000đ", timeStart: "15 giờ 45 phút" },
        { placeFrom: "Sài Gòn", placeTo: "Huế", distance: "1042km", time: "22h", price: "410.000đ", timeStart: "7 giờ 50 phút" },
        { placeFrom: "Sài Gòn", placeTo: "Đà Nẵng", distance: "957km", time: "16h48'", price: "395.000đ", timeStart: "9 giờ 45 phút" },
    ]

    return (
        <div className='container trip-list'>
            <div className='row m-4'>
                <div className='col-sm-6'>
                    <input className='form-control' type="text" value={placeFrom} placeholder="Tìm điểm đến" />
                </div>
                <div className='col-sm-6'>
                    <input className='form-control' type="text" value={placeTo} placeholder="Tìm điểm đi" />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Tuyến xe</th>
                                <th>Quãng đường</th>
                                <th>Thời gian</th>
                                <th>Giá vé</th>
                                <th>Giờ chạy</th>
                                <th>Đặt vé</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((list, index) => (
                                <tr key={index}>
                                    <td>{list.placeFrom} - {list.placeTo}</td>
                                    <td>{list.distance}</td>
                                    <td>{list.time}</td>
                                    <td>{list.price}</td>
                                    <td>{list.timeStart}</td>
                                    <td>
                                        <a href='#'>Đặt vé</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
