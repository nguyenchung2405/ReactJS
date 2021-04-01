import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableSinhVien extends Component {

    renderSinhVien = () => {
        return this.props.mangSinhVien.map((SV, index) => {
            return (
                <tr key={index}>
                    <td>{SV.maSinhVien}</td>
                    <td>{SV.tenSinhVien}</td>
                    <td>{SV.email}</td>
                    <td>{SV.soDienThoai}</td>
                    <td className='text-center'>
                        <button type='button' className='btn btn-secondary mr-3' onClick={() => {
                            this.props.dispatch({
                                type: 'SUA_SINH_VIEN',
                                sinhVien: SV,
                            })
                        }}>Sửa</button>
                        <button type='button' className='btn btn-danger' onClick={() => {
                            // Gửi mã sinh viên lên reducer
                            this.props.dispatch({
                                type: 'XOA_SINH_VIEN',
                                maSinhVien: SV.maSinhVien,
                            })
                        }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props.mangSinhVien);
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
    }
};
export default connect(mapStateToProps)(TableSinhVien);