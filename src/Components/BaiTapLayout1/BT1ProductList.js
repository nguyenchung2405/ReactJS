import React, { Component } from 'react'
import BT1Product from './BT1Product'

export default class BT1ProductList extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <BT1Product />
                        <BT1Product />
                        <BT1Product />
                        <BT1Product />
                    </div>
                </section>
            </div>
        )
    }
}
