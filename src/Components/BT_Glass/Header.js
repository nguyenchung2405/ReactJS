import React, { Component } from 'react'
import style from './style.module.css';

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid text-center display-4 bg-dark py-3 text-white">
                <p>TRY GLASSES APP ONLINE</p>
            </div>
        )
    }
}
