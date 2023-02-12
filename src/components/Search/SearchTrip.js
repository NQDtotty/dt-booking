import React from 'react'
import './Form.css'

export default function SearchTrip() {
    return (
        <div className='container'>
            <form>
                <div className='form-group row'>
                    <div className='col-sm-4'>
                        <select className='form-control'>
                            <option>Chọn điểm đi</option>
                        </select>
                    </div>
                    <div className='col-sm-4'>
                        <select className='form-control'>
                            <option>Chọn điểm đến</option>
                        </select>
                    </div>
                    <div className='col-sm-4'>
                        <select className='form-control'>
                            <option>Chọn ngày</option>
                        </select>
                    </div>
                </div>
                <div className='row button'>
                    <button className='btn' type='submit'>Tìm chuyến xe</button>
                </div>
            </form>
        </div>
    )
}
