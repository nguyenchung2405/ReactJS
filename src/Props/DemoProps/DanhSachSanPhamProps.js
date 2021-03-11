import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000, img: 'https://picsum.photos/220/220' },
        { id: 2, name: 'Iphone XS', price: 1000, img: 'https://picsum.photos/190/190' },
        { id: 3, name: 'Iphone XS Max', price: 1000, img: 'https://picsum.photos/200/200' }
    ];

    renderSanPham = () => {
        return this.productList.map((SanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPhamProps sp={SanPham} />
            </div>
        })
    }
    // Component sử dụng thẻ được gọi là component cha, thẻ được sử dụng là component con
    // Ở bài này DanhSachSPProps là component cha, SanPhamProps là component con
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
