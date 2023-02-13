import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 logo'>
                    <h2>
                        <NavLink to="/">DT-Booking</NavLink>
                    </h2>
                </div>
                <div className='col-lg-6 nav-menu'>
                    <nav className="navbar navbar-expand-sm p-0">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tour">Lịch trình</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Liên hệ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/payment">Hóa đơn</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Về chúng tôi</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-lg-3 nav-btn'>
                    <nav className="navbar navbar-expand-sm p-0">
                        <ul className="navbar-nav">
                            <li className="nav-item log-in">
                                <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
                            </li>
                            <li className="nav-item sign-up">
                                <NavLink className="nav-link" to="/register">Đăng ký</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
