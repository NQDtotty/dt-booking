import React, { useState } from 'react';
import './Auth.css';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleFullName = e => {
        setFullName(e.target.value);
    }

    const handlePhone = e => {
        setPhone(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }


    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Đăng ký</h3>
                        <div className="form-group mt-3">
                            <label>Họ và tên</label>
                            <input
                                value={fullName}
                                name='fullName'
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nhập họ và tên"
                                required
                                onChange={handleFullName}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Số điện thoại</label>
                            <input
                                value={phone}
                                name='phone'
                                type="tel"
                                className="form-control mt-1"
                                placeholder="Nhập số điện thoại"
                                required
                                onChange={handlePhone}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                value={email}
                                name='email'
                                type="email"
                                className="form-control mt-1"
                                placeholder="Nhập email"
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Mật khẩu</label>
                            <input
                                value={password}
                                name='password'
                                type="password"
                                className="form-control mt-1"
                                placeholder="Nhập mật khẩu"
                                required
                                onChange={handlePassword}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Xác nhận mật khẩu</label>
                            <input
                                value={confirmPassword}
                                name='confirmPassword'
                                type="password"
                                className="form-control mt-1"
                                placeholder="Xác nhận mật khẩu"
                                required
                                onChange={handleConfirmPassword}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
