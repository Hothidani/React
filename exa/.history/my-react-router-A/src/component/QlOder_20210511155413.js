import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../QLOrder.css';
class Order extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }


    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><a >Đang chuẩn bị</a></li>
                        <li><a >Đang giao</a></li>
                        <li><a >Đã giao</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}



export default Order;