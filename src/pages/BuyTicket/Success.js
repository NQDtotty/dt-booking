import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

export default function Success() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
    const [trip, setTrip] = useState(JSON.parse(sessionStorage.getItem("trip")))
    const [message, setMessage] = useState("");
    const [seat, setSeat] = useState("");
    const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('In vé thành công!!')
    })

    const handleDate = date => {
        var tempDate = new Date(date);
        var formattedDate = [tempDate.getDate(), tempDate.getMonth() + 1, tempDate.getFullYear()].join('/');
        return formattedDate;
    }

    const handleBackToHome = () => {
        sessionStorage.removeItem("trip")
        navigate("/")
    }

    useEffect(() => {
        const dataObj = {
            userId: user.userId,
            tripId: trip.tripId,
            price: trip.fare,
        }
        const reqObj = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataObj)
        }
        fetch("http://localhost:8080/ticket/createTicket", reqObj)
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
                setSeat(data.data.seatNo);
            })
    }, [])
    return (
        <div className='container success-buy-ticket'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='mt-4 text-center text-success'>
                        {message}&nbsp;
                        <i className="fas fa-check-circle"></i>
                    </h1>
                </div>
            </div>
            <div className='row' ref={componentRef}>
                <div className='col-12 col-sm-3'></div>
                <div className='col-12 col-sm-6'>
                    <table className='table'>
                        <tr>
                            <th>Thông tin khách hàng</th>
                            <td>{user.fullname}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{user.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Chuyến xe</th>
                            <td>{trip.from} - {trip.arrival}</td>
                        </tr>
                        <tr>
                            <th>Điểm lên xe</th>
                            <td>{trip.stationStart}</td>
                        </tr>
                        <tr>
                            <th>Biển số xe</th>
                            <td>{trip.liencePlate}</td>
                        </tr>
                        <tr>
                            <th>Số ghế</th>
                            <td>{seat}</td>
                        </tr>
                        <tr>
                            <th>Thời gian</th>
                            <td>{trip.time} {handleDate(trip.date)}</td>
                        </tr>
                    </table>
                </div>
                <div className='col-12 col-sm-3'></div>
            </div>
            <div className='row mb-4'>
                <button className='btn btn-danger' onClick={handleBackToHome}>
                    Trở về trang chủ
                </button>
                <button className='btn btn-warning' onClick={handlePrint}>
                    In vé
                </button>
            </div>
        </div>
    )
}
