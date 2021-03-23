import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {

    render() {
        let { sanPham } = this.props;
        return (
            <div className="col-4 card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} height='350px' />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button className="btn btn-success" >Xem chi tiết</button>
                    <button className='btn btn-primary ml-1' >Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

// Kết nối dữ liệu đến store
export default connect()(SanPhamRedux)