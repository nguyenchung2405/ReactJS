import React, { Component } from 'react'

export default class ProducList extends Component {
    renderProduct = () => {
        let { arrProduct } = this.props;
        return arrProduct.map((Product, index) => {
            return <div key={index}>
                <img width='100%' src={Product.url} onClick={() => {
                    this.props.thayDoiKinh(Product)
                }} />
            </div>
        })
    }
    render() {
        return (
            <div className='d-flex container productList mt-3'>
                {this.renderProduct()}
            </div>
        )
    }
}
