import React, { Component } from 'react'

export default class Databinding extends Component {

    sinhVien = {
        ma: 1,
        ten: 'Tèo',
    };

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: 'Văn Tèo',
            img: 'http://picsum.photos/200/150'
        }

        return <div className="card text-left">
            <img className="card-img-top" src={sinhVien.img} alt="photo" />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ten}</h4>
                <p className="card-text">{sinhVien.ma}</p>
            </div>
        </div>

    };

    // Databinding là cơ chế hiển thị dữ liệu lên thành phần giao diện
    render() {
        let name = 'Chung';
        let product = {
            id: 1,
            name: 'Iphone',
            price: 1000,
            img: 'https://picsum.photos/120/100'
        };
        let renderProduct = () => {
            // Khi nội dung là component thì phải được bao phủ bởi 1 thẻ
            return <div>
                <p>{product.name}</p>
            </div>
        };

        return (
            <div className="container">
                {this.renderSinhVien()}

                <ul className="nav">
                    <li>Mã số sinh viên: {this.sinhVien.ma}</li>
                    <li>Tên sinh viên: {this.sinhVien.ten}</li>
                </ul>
                <p id="title">{name}</p>
                <br />
                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt="photo" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                    {renderProduct()}
                </div>

            </div>
        )
    }
}
