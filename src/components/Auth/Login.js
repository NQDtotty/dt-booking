import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Auth.css';

export default function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    // State for checking errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handlePhone = e => {
        setPhone(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        // e.preventDefault();
        // Do something
        if (phone === "123" && password === "123") {
            setError(false);
            setSubmitted(true);
        }
        else {
            setError(true);
            setSubmitted(false);
        }
    }

    // Showing success message
    const successMessage = () => {
        console.log("Success")
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <p>Đăng nhập thành công!</p>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        console.log("Error")
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Đăng nhập không thành công</h1>
            </div>
        );
    };

    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Đăng nhập</h3>
                        <div className="form-group mt-3">
                            <label>Nhập số điện thoại:</label>
                            <input
                                value={phone}
                                name='phone'
                                type="number"
                                className="form-control mt-1"
                                placeholder="Nhập số điện thoại"
                                required
                                onChange={handlePhone}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nhập mật khẩu:</label>
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
                        <div className="messages">
                            {errorMessage()}
                            {successMessage()}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onChange={handleSubmit}>
                                Đăng ký
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Bạn chưa có tài khoản?&nbsp;
                            <NavLink to="/register" className="text-danger">Đăng ký</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
