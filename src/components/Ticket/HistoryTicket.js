import React, { useState } from 'react'
import './HistoryTicket.css';
import "./Popup.css";

function LoadData() {
    fetch("http://localhost:8080/ticket/getListTicketByemail?email=Bao@gmail.com")
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem("listticket", JSON.stringify(data));
        });
}

export default function HistoryTicket() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
    console.log(user)
    console.log(user.email)
    //Load data base:
    fetch("http://localhost:8080/ticket/getListTicketByemail?email=Bao@gmail.com")
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem("listticket", JSON.stringify(data));
        });
    var listticket = useState(JSON.parse(sessionStorage.getItem("listticket")))[0];
    console.log(listticket)


    const handleSubmit = e => {
        e.preventDefault();
        if (window.confirm('Lưu ý khi hủy vé Quý Khách sẽ chịu 10% phí đã được thanh toán trước để Hủy vé')) {
            var id = JSON.stringify(e.target.id).toString().replaceAll('"', '')
            var url = "http://localhost:8080/ticket/deleteticket?ticketId=" + JSON.stringify(e.target.id).toString().replaceAll('"', '')
            fetch("http://localhost:8080/ticket/deleteticket?" + new URLSearchParams({
                ticketId: id,
            }))
                .then(response => {
                    console.log(response)
                })
                .then(data => {
                    console.log(data)
                });
            alert('Cảm ơn Quý Khách ! Chúng tôi sẽ hoàn 90% số tiền đã thanh toán cho quý khách !');
            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            delay(3000).then(() => {
                window.open(window.location.href, "_self")
            });
            fetch("http://localhost:8080/ticket/getListTicketByemail?email=Bao@gmail.com")
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem("listticket", JSON.stringify(data));
                });
            listticket = JSON.parse(sessionStorage.getItem("listticket"))[0];
            this.render()
            return (
                <div className='container history'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h3 className='title'>Xin chào {user.fullname}</h3>
                            <p className='description-title'>Lịch sử đặt vé</p>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Ticket ID</th>
                                        <th>Booking Date</th>
                                        <th>Seat No</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listticket.map((list, index) => (
                                        <tr key={index}>
                                            <td>{list.ticketId}</td>
                                            <td>{list.bookingDate}</td>
                                            <td>{list.seatNo}</td>
                                            <td>{list.price}</td>
                                            <td>{list.status}</td>
                                            <td>
                                                <button type="submit" id={list.ticketId} className="btn btn-secondary" onClick={handleSubmit}>
                                                    Hủy vé
                                                </button>
                                                <button type="submit" id={list.ticketId} className="btn btn-secondary" >
                                                    Đổi vé
                                                </button>
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
        else {
            alert('Hủy vé không thành công !')
        }



    }


    return (
        <div className='container history'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h3 className='title'>Xin chào {user.fullname}</h3>
                    <p className='description-title'>Lịch sử đặt vé</p>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Booking Date</th>
                                <th>Seat No</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listticket.map((list, index) => (
                                <tr key={index}>
                                    <td>{list.ticketId}</td>
                                    <td>{list.bookingDate}</td>
                                    <td>{list.seatNo}</td>
                                    <td>{list.price}</td>
                                    <td>{list.status}</td>
                                    <td>
                                        <button type="submit" id={list.ticketId} className="btn btn-secondary" onClick={handleSubmit}>
                                            Hủy vé
                                        </button>
                                        <button type="submit" id={list.ticketId} className="btn btn-secondary" >
                                            Đổi vé
                                        </button>
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
