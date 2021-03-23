import React, { Component } from 'react'
// Kết nối component với store từ redux
import { connect } from 'react-redux';


class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHangProps.map((spGH, index) => {
            return <tr key={index} >
                <td>{spGH.maSP}</td>
                <td><img height='50px' src={spGH.hinhAnh} /></td>
                <td>{spGH.tenSP}</td>
                <td>
                    <button className='btn' onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}><i class="fas fa-minus"></i></button>
                    {spGH.soLuong}
                    <button className='btn' onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}><i class="fas fa-plus"></i></button>
                </td>
                <td>{(spGH.gia).toLocaleString()} VNĐ</td>
                <td>{(spGH.gia * spGH.soLuong).toLocaleString()} VNĐ</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {
                        this.props.xoaGioHang(spGH.maSP)
                    }} >Xóa</button>
                </td>
            </tr >
        })
    }

    render() {
        console.log(this.props);
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

const mapStateToProps = (rootReducer) => {
    // Hàm này tạo ra props từ state/rootReducer của redux
    return {
        gioHangProps: rootReducer.gioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            console.log(maSP);
            const action = {
                type: 'XOA_SP_GIO_HANG',
                maSP,
            };
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, soLuong) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                soLuong
            };
            dispatch(action);
        }
    }
}
// Biến đổi BaiTapGioHangRedux thành BaiTapGioHang có kết nối với Redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);