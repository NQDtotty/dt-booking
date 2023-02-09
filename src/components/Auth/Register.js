import React from 'react';
import './Auth.css';

export default function Register() {
    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Đăng ký</h3>
                        <div className="form-group mt-3">
                            <label>Nhập họ và tên:</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nhập số điện thoại:</label>
                            <input
                                type="tel"
                                className="form-control mt-1"
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nhập email:</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Nhập email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nhập mật khẩu:</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter mật khẩu"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Xác nhận mật khẩu:</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Xác nhận mật khẩu"
                                required
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
