import React, { Component } from 'react'
// Cách 1: import đường dẫn css từ file component
// import './styles.css'
// Cách 2: import css tại component
import style from './styles.module.css'

export default class Styles extends Component {
    render() {
        return (
            <div>
                <p className="text-red">cybersoft</p>

                <p className={style.textGreen}>abc</p>
                <p className={style['textGreen']}>abcde</p>
                <p className={`${style['textGreen']} ${style['bg-dark']} display-4`}>fkabfhbakfhk</p>

                <section style={{
                    backgroundColor: 'black',
                    color: 'green'
                }}>
                    component
                </section>
            </div>
        )
    }
}
