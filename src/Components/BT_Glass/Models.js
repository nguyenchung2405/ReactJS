import React, { Component } from 'react'

export default class Models extends Component {
    render() {
        let { ThuKinh } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center left">
                        <img src="./glassesImage/model.jpg" alt="model" />
                        <div className='model__glass'>
                            <img src={ThuKinh.url} />
                        </div>
                        <div className="glass__desc">
                            <h5>{ThuKinh.name}</h5>
                            <p>{ThuKinh.desc}</p>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <img src="./glassesImage/model.jpg" alt="model" />
                    </div>
                </div>
            </div>
        )
    }
}
