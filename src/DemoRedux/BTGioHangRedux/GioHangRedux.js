import React, { Component } from 'react'
// Kết nối component với store từ redux
import { connect } from 'react-redux';


class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHangProps.map((spGH, index) => {
            return <tr>
                <td>{spGH.maSP}</td>
                <td><img src={spGH.hinhAnh} /></td>
                <td>{spGH.tenSP}</td>
            </tr>
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
// Biến đổi BaiTapGioHangRedux thành BaiTapGioHang có kết nối với Redux
export default connect(mapStateToProps)(GioHangRedux);