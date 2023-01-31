import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                                <a class="nav-link" href="#home">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Lịch trình</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Liên hệ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Hóa đơn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Về chúng tôi</a>
                            </li>
                        </ul>

                    </nav>
                </div>
                <div className='col-lg-3 nav-btn'>
                    <nav class="navbar navbar-expand-sm p-0">
                        <ul class="navbar-nav">
                            <li class="nav-item log-in">
                                <a class="nav-link" href="#">Đăng nhập</a>
                            </li>
                            <li class="nav-item sign-up">
                                <a class="nav-link" href="#">Đăng kí</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
