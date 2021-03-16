import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { sp, viewDetail, themGioHang } = this.props;

        return (
            <div className="col-4 card text-left">
                <img className="card-img-top" src={sp.hinhAnh} alt={sp.tenSP} height='350px' />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <button className="btn btn-success" onClick={() => {
                        { viewDetail(sp) }
                    }}>Xem chi tiết</button>
                    <button className='btn btn-primary ml-1' onClick={() => {
                        // Sử dụng hàm thêm giỏ hàng từ component cha (hoặc con) truyền vào
                        { themGioHang(sp) }
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
