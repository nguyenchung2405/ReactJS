import React, { Component } from 'react'
import style from './BT3Header.module.css'

export default class BT3Header extends Component {
    render() {
        return (
            <header className="jumbotron">
                <h1 className="display-3">A Warm Welcome!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
                    </p>
                <a href="#" className="btn btn-primary btn-lg">Call to action</a>
            </header>
        )
    }
}
