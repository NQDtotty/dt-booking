import React from 'react';
import './Auth.css';
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Đăng nhập</h3>
                        <div className="form-group mt-3">
                            <label>Nhập số điện thoại:</label>
                            <input
                                type="number"
                                className="form-control mt-1"
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nhập mật khẩu:</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
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
