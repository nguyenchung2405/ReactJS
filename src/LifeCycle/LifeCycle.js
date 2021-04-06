import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            numberObject: {
                num: 1
            }
        }

        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return currentState;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <div className='container mt-2'>
                <ChildComponent numberObject={this.state.numberObject} />
                <h2>{this.state.numberObject.num}</h2>
                <button className='btn btn-success' onClick={() => {
                    let numberObject = { ...this.state.numberObject };
                    numberObject.num += 1;
                    this.setState({
                        numberObject
                    })
                    // this.setState({
                    //     number: this.state.number + 1
                    // })
                }}>Click</button>
                <hr />
                <h3>Child Component</h3>

                {/* {this.state.number < 3 ? <ChildComponent /> : ''} */}

            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }



    componentDidUpdate() {
        // Hạn chế setState (muốn setState phải có if)
        console.log('componentDidUpdate');
    }
}
