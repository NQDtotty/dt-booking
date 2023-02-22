import React from 'react'
import './Form.css'

export default function SearchTrip() {
    return (
        <div className='container'>
            <form className='form-search-trip'>
                <div className='form-group row'>
                    <div className='col-lg-3 col-md-12'>
                        <select className='form-control'>
                            <option>Chọn điểm đi</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-12'>
                        <select className='form-control'>
                            <option>Chọn điểm đến</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-12'>
                        <select className='form-control'>
                            <option>Chọn ngày</option>
                        </select>
                    </div>
                    <div className='button col-lg-3 col-md-12'>
                        <button className='btn btn-secondary' type='submit'>
                            <i className="fas fa-search"></i>&nbsp;
                            Tìm chuyến
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
