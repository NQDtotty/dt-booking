import React from 'react'
import './TripList.css'

export default function SpecialTrip() {
    const list = [
        { placeFrom: "Sài Gòn", placeTo: "Đà Lạt", distance: "310km", time: "8h", price: "300.000đ" },
        { placeFrom: "Sài Gòn", placeTo: "Đà Nẵng", distance: "980km", time: "20h", price: "395.000đ" },
        { placeFrom: "Sài Gòn", placeTo: "Nha Trang", distance: "450km", time: "9h", price: "275.000đ" },
        { placeFrom: "Sài Gòn", placeTo: "Cần Thơ", distance: "190km", time: "4h", price: "165.000đ" },
        { placeFrom: "Sài Gòn", placeTo: "Rạch Giá", distance: "235km", time: "5h", price: "1990.000đ" },
        { placeFrom: "Sài Gòn", placeTo: "Cà Mau", distance: "375km", time: "8h", price: "230.000đ" },
        { placeFrom: "Sài Gòn", placeTo: "Châu Đốc", distance: "240km", time: "6h", price: "175.000đ" },
        { placeFrom: "Đà Nẵng", placeTo: "Hà Nội", distance: "745km", time: "20h", price: "300.000đ" },
    ]
    return (
        <div className='container special-trip'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='title'>Tuyến phổ biến</h1>
                </div>
            </div>
            <div className='row'>
                {list.map((trip, index) => (
                    <div className='col-lg-6 col-12' key={index}>
                        <a className='card'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3>{trip.placeFrom} - {trip.placeTo}</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>&nbsp;
                                        {trip.distance}
                                    </p>
                                </div>
                                <div className='col-4'>
                                    <p>
                                        <i className="fas fa-clock"></i>&nbsp;
                                        {trip.time}
                                    </p>
                                </div>
                                <div className='col-4'>
                                    <p className='price'>
                                        <i className="fas fa-money-bill-wave-alt"></i>&nbsp;
                                        {trip.price}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
