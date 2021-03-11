import React, { Component } from 'react'

export default class HandleEvents extends Component {

    handleClick = () => {
        alert('Hello Chung');
    }

    showMess = (name) => {
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div>
                <button type="button" id="btnClick" onClick={this.handleClick}>Click me</button>
                <br />
                <button className="btn btn-success" type="button" onClick={() => {
                    this.showMess('Bình');
                    this.showMess('Châu');
                }}>Show message</button>
            </div>
        )
    }
}
