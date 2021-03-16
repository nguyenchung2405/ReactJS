import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((item, index) => {
            return <tr>
                <td>{item.maSP}</td>
                <td><img src={item.hinhAnh} width='50px' /></td>
                <td>{item.tenSP}</td>
                <td>{item.soLuong}</td>
                <td>{item.gia}</td>
                <td>{item.soLuong * item.gia}</td>
                <td><button className='btn btn-danger'>Xóa</button></td>
            </tr>
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Giỏ hàng (1)</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
