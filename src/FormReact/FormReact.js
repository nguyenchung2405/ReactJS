import React, { Component } from 'react'

export default class FormReact extends Component {
    render() {
        return (
            <form className='container'>
                <div className="card text-white bg-dark">
                    <div className='card-header'>Thông tin sinh viên</div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Mã sinh viên: </label>
                                    <input className='form-control' type="text" name='maSinhVien' />
                                    <div className='form-group'>
                                        <label>Số điện thoại: </label>
                                        <input className='form-control' type="text" name='soDienThoai' />
                                    </div>
                                </div>
                                <div className='col-6'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
