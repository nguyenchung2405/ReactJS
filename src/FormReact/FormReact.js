import React, { Component } from 'react'
import TableSinhVien from './TableSinhVien';
import { connect } from 'react-redux';

class FormReact extends Component {

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

    handleSubmit = (event) => {
        // Cản sự kiện submit của browser
        event.preventDefault();
        // Kiểm tra dữ liệu hợp lệ 
        /*
            Tất cả key của this.state.values phải khác rỗng
            Và tất cả các key của this.state.err phải bằng rỗng
        */
        let valid = true;
        let { values, error } = this.state;
        // (1) Duyệt values
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
            }
        }
        // (2) Duyệt error
        for (let key in error) {
            if (error[key] !== '') {
                valid = false;
            }
        }

        if (!valid) {
            alert('Dữ liệu không hợp lệ.');
            return;
        }
        // Hợp lệ thì giở lên redux
        this.props.dispatch({
            type: 'THEM_SINH_VIEN',
            sinhVien: this.state.values,
        });
        console.log(this.state.values);
    }

    // componentWillReceiveProps chạy sau khi props thay đổi và trước khi render
    componentWillReceiveProps(newProps) { //props mới 

        // Lấy dữ liệu từ props gán cho state
        this.setState({
            values: newProps.sinhVienSua
        })

    }

    render() {
        // Giá trị input trên giao diện luôn luôn lấy từ state
        let { maSinhVien, tenSinhVien, soDienThoai, email } = this.state.values;
        return (
            <form className='container mt-5' onSubmit={this.handleSubmit}>
                <div className="card text-white bg-dark">
                    <div className='card-header mx-auto display-4'>Thông tin sinh viên</div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Mã sinh viên: </label>
                                    <input className='form-control' type="text" name='maSinhVien' onChange=
                                        {this.handleChangeInput} value={maSinhVien}
                                    />
                                    <p className='text text-danger'>{this.state.error.maSinhVien}</p>
                                </div>
                                <div className='form-group'>
                                    <label>Số điện thoại: </label>
                                    <input className='form-control' type="text" name='soDienThoai' onChange=
                                        {this.handleChangeInput} value={soDienThoai} />
                                    <p className='text text-danger'>{this.state.error.soDienThoai}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Tên sinh viên: </label>
                                    <input className='form-control' type="text" name='tenSinhVien' onChange=
                                        {this.handleChangeInput} value={tenSinhVien} />
                                    <p className='text text-danger'>{this.state.error.tenSinhVien}</p>
                                </div>
                                <div className='form-group'>
                                    <label>Email: </label>
                                    <input typeProps='email' className='form-control' type="text" name='email' onChange=
                                        {this.handleChangeInput} value={email} />
                                    <p className='text text-danger'>{this.state.error.email}</p>
                                </div>
                            </div>
                            <button className='btn btn-success ml-3'>Thêm sinh viên</button>
                            <button type='button' className='btn btn-primary ml-3' onClick={() => {
                                // Đưa dữ liệu form lên redux
                                this.props.dispatch({
                                    type: 'CAP_NHAP_SINH_VIEN',
                                    sinhVienCapNhat: this.state.values
                                })
                            }}>Cập nhật sinh viên</button>
                        </div>
                    </div>
                </div>
                <TableSinhVien />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormReact);