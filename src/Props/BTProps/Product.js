import React, { Component } from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default class Product extends Component {

    arrProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        productDetail: {

        },
        gioHang: []
    }
    // Phương thức thay đổi State đặt tại component chứa State
    xoaGioHang = (maSanPham) => {
        console.log(maSanPham);
        // Tạo ra biến giỏ hảng cập nhật
        let gioHangCapNhat = [...this.state.gioHang];

        // Tìm phẩn tử đó trong mảng
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSanPham);
        // Nếu tìm thấy
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }
        // Cập nhật lại giỏ hàng
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    themGioHang = (spClick) => {
        console.log(spClick);
        // Xử lý setState cho giỏ hàng
        // Bước 1: Từ sản phẩm được click tạo ra sản phẩm giỏ hảng
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            gia: spClick.giaBan,
            soLuong: 1,
            hinhAnh: spClick.hinhAnh
        }
        // Bước 2: Xử lý thêm giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang];
        // Kiểm tra xem sản phẩm đã có trong giỏ hay chưa
        let index = gioHangCapNhat.findIndex(item => item.maSP === spGioHang.maSP)

        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang);
        }
        // Bước 3: set lại state sau khi xử lý
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }

    renderProduct = () => {
        return this.arrProduct.map((sanPham, index) => {
            return <ProductItem sp={sanPham} viewDetail={this.viewDetail} themGioHang={this.themGioHang} />
            // <div className="col-4 card text-left">
            //     <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} width='100%' />
            //     <div className="card-body">
            //         <h4 className="card-title">{sanPham.tenSP}</h4>
            //         <button className="btn btn-success" onClick={() => {
            //             this.viewDetail(sanPham)
            //         }}>Xem chi tiết</button>
            //     </div>
            // </div>
        })
    }

    tangGiamSoLuong = (maSP, soLuong) => {
        console.log(maSP, soLuong);
        let gioHangCapNhat = [...this.state.gioHang];
        // Dùng FindIndex
        // let index = gioHangCapNhat.findIndex(spGioHang => spGioHang.maSP === maSP);
        // if (index !== -1) {
        //     gioHangCapNhat[index].soLuong += soLuong;
        //     if (gioHangCapNhat[index].soLuong === 0) {
        //         this.xoaGioHang(maSP);
        //     } else {
        //         this.setState({
        //             gioHang: gioHangCapNhat
        //         })
        //     }
        // }
        // Dùng Find
        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSP);
        if (spGioHang) {
            spGioHang.soLuong += soLuong;
            if (spGioHang.soLuong === 0) {
                alert('Số lượng ít nhất là 1.');
                spGioHang.soLuong -= soLuong;
            } else {
                this.setState({
                    gioHang: gioHangCapNhat
                })
            }
        }
    }

    viewDetail = (itemClick) => {
        console.log('itemClick', itemClick);

        this.setState({
            productDetail: itemClick
        });
    }

    render() {
        let { tenSP, hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } = this.state.productDetail;
        return (
            <div className="container">
                <Carts gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangSoLuong={this.tangSoLuong} giamSoLuong={this.giamSoLuong} tangGiamSoLuong={this.tangGiamSoLuong} />
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="productDetail mt-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="display-4">{tenSP}</div>
                            <img src={hinhAnh} width='100%' />
                        </div>
                        <div className="col-8">
                            <div className="display-4">Thông số kỹ thuật</div>
                            <table class="table mt-5">
                                <thead>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
