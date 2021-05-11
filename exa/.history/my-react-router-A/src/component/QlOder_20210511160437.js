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
                <div className="content">
                    <ul className="content-a">
                        <li className="content-a-1"><a >Đang chuẩn bị</a></li>
                        <li><a >Đang giao</a></li>
                        <li><a >Đã giao</a></li>
                    </ul>
                </div>
                <div className="clearfix" />
            </div>
            
        );
    }
}



export default Order;