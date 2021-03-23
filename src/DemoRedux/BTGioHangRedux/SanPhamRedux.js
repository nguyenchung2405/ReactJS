import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {

    render() {
        console.log(this.props);
        let { sanPham } = this.props;
        return (
            <div className="col-4 card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} height='350px' />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button className="btn btn-success" >Xem chi tiết</button>
                    <button className='btn btn-primary ml-1' onClick={() => {
                        this.props.themGioHang(sanPham)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    // dispatch giống như phương thức setState trong reactClass component
    return {
        themGioHang: (spClick) => {
            console.log(spClick);
            // Từ spClick tạo ra sp giỏ hảng
            const spGioHang = {
                maSP: spClick.maSP,
                tenSP: spClick.tenSP,
                hinhAnh: spClick.hinhAnh,
                gia: spClick.giaBan,
                soLuong: 1
            };
            // Đóng gói dữ liệu gửi lên store
            const action = {
                type: 'THEM_GIO_HANG', // Đây là thuộc tính bắt buộc để reducer nhận biết giá trị xử lý
                spGioHang: spGioHang
            };
            // Gửi action lên Reducer
            dispatch(action);
        }
    }
}

// Kết nối dữ liệu đến store
export default connect(null, mapDispatchToProps)(SanPhamRedux)