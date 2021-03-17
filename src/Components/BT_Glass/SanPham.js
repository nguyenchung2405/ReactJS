import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {
        let { sanPham } = this.props;
        return (
            <>
                <img width='100%' src={sanPham.url} />
            </>
        )
    }
}
