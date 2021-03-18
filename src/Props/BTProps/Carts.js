import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSP}</td>
                <td><img src={item.hinhAnh} width='50px' /></td>
                <td>{item.tenSP}</td>
                <td>
                    <span style={{ marginRight: '8px', cursor: 'pointer' }} onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, -1)
                    }}>
                        <i class="fas fa-minus"></i>
                    </span>
                    {item.soLuong}
                    <span style={{ marginLeft: '8px', cursor: 'pointer' }} onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, 1)
                    }}>
                        <i class="fas fa-plus"></i>
                    </span>
                </td>
                <td>{item.gia.toLocaleString()}</td>
                <td>{(item.soLuong * item.gia).toLocaleString()}</td>
                <td><button className='btn btn-danger' onClick={() => {
                    this.props.xoaGioHang(item.maSP)
                }} >Xóa</button></td>
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
