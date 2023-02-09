import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 logo'>
                    <h2><a href='#home'>DT-Booking</a></h2>
                </div>
                <div className='col-lg-6 nav-menu'>
                    <nav class="navbar navbar-expand-sm p-0">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/tour">Lịch trình</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact">Liên hệ</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/payment">Hóa đơn</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">Về chúng tôi</NavLink>
                            </li>
                        </ul>

                    </nav>
                </div>
                <div className='col-lg-3 nav-btn'>
                    <nav class="navbar navbar-expand-sm p-0">
                        <ul class="navbar-nav">
                            <li class="nav-item log-in">
                                <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
                            </li>
                            <li class="nav-item sign-up">
                                <NavLink className="nav-link" to="/register">Đăng ký</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
