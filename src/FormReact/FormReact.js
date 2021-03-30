import React, { Component } from 'react'

export default class FormReact extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        error: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
    }

    handleChangeInput = (event) => {
        let { name, value } = event.target; // event.target là tag input đang xảy ra sự kiện onchange

        // Lấy typeProps (tên tự đặt) của thẻ để xác định email hay phone vân vân
        let typeProps = event.target.getAttribute('typeProps');

        // Tạo value mới mỗi lần nhập liệu
        let newValue = { ...this.state.values };
        newValue[name] = value;
        // Tạo error mới mỗi lần nhập liệu
        let newErr = { ...this.state.error };
        let errMess = '';
        // Kiểm tra rỗng
        if (newValue[name] === '') {
            errMess = 'Không được bỏ trống.';
        } else {
            newErr[name] = '';
        }
        if (typeProps === 'email') {
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regexEmail.test(value)) {
                errMess = 'Email không hợp lệ.'
            }
        }
        newErr[name] = errMess;
        // Xử lý setState
        this.setState({
            values: newValue,
            error: newErr
        });
    }

    render() {
        return (
            <form className='container'>
                <div className="card text-white bg-dark">
                    <div className='card-header mx-auto display-4'>Thông tin sinh viên</div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Mã sinh viên: </label>
                                    <input className='form-control' type="text" name='maSinhVien' onChange=
                                        {this.handleChangeInput}
                                    />
                                    <p className='text text-danger'>{this.state.error.maSinhVien}</p>
                                </div>
                                <div className='form-group'>
                                    <label>Số điện thoại: </label>
                                    <input className='form-control' type="text" name='soDienThoai' onChange=
                                        {this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.error.soDienThoai}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Tên sinh viên: </label>
                                    <input className='form-control' type="text" name='tenSinhVien' onChange=
                                        {this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.error.tenSinhVien}</p>
                                </div>
                                <div className='form-group'>
                                    <label>Email: </label>
                                    <input typeProps='email' className='form-control' type="text" name='email' onChange=
                                        {this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.error.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
