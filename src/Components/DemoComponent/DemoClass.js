import React, { Component } from 'react'

//Dùng rcc

export default class DemoClass extends Component {


    // Phương thức render sẽ tự kích hoạt khi mình sử dụng thẻ component
    render() {
        return (
            <div className="container">
                <p className="display-4 pt-2">Title</p>
                <p>Content</p>
            </div>
        )
    };
}
