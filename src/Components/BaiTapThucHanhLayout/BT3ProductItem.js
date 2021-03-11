import React, { Component } from 'react'

export default class BT3ProductItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/500x325" />
                    <div className="card-body">
                        <h4>Card Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary" href="#">Find out more</a>
                    </div>
                </div>
            </div>
        )
    }
}
