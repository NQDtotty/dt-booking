import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css'

export default function Profile() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("user");
        navigate("/");
        window.location.reload(false);
    }

    return (
        <div className='container user'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h3 className='title'>Xin chào {user.fullname}</h3>
                    <p className='description-title'>Thông tin cá nhân</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <form className='form-profile'>
                        <div className='row m-4'>
                            <div className='col-4'>
                                <label>Họ và tên:</label>
                            </div>
                            <div className='col-8'>
                                <input className='form-control' type="text" value={user.fullname} readOnly />
                            </div>
                        </div>
                        <div className='row m-4'>
                            <div className='col-4'>
                                <label>Số điện thoại:</label>
                            </div>
                            <div className='col-8'>
                                <input className='form-control' type="tel" value={user.phoneNumber} readOnly />
                            </div>
                        </div>
                        <div className='row m-4'>
                            <div className='col-4'>
                                <label>Email:</label>
                            </div>
                            <div className='col-8'>
                                <input className='form-control' type="email" value={user.email} readOnly />
                            </div>
                        </div>
                        <div className='row m-4'>
                            <div className='col-4'>
                                <label>Giới tính:</label>
                            </div>
                            <div className='col-8'>
                                <input className='form-control' type="text" value={user.gender === 'male' ? "Nam" : "Nữ"} readOnly />
                            </div>
                        </div>
                    </form>
                    <button className='btn-logout' onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}
