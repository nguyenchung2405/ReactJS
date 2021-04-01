import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableSinhVien extends Component {

    renderSinhVien = () => {
        return this.props.mangSinhVien.map((SV, index) => {
            return (
                <tr key={index}>
                    <td>{SV.maSV}</td>
                    <td>{SV.tenSV}</td>
                    <td>{SV.email}</td>
                    <td>{SV.soDienThoai}</td>
                    <td className='text-center'>
                        <button className='btn btn-secondary mr-3'>Sửa</button>
                        <button className='btn btn-danger'>Xóa</button>
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