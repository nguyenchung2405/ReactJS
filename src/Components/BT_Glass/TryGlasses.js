import React, { Component } from 'react'
import Header from './Header'
import Models from './Models'
import './styles.css'

export default class TryGlasses extends Component {
    render() {
        return (
            <div id="bg-img">
                <Header />
                <Models />
            </div>
        )
    }
}
