import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {}

        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return currentState;
    }

    render() {
        return (
            <div>

            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
}
