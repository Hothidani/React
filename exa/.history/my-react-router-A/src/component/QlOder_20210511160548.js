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
                        <li ><a >ĐANG CHUẨN BỊ </a></li>
                        <li><a >ĐANG GIAO</a></li>
                        <li><a >ĐÃ GIAO</a></li>
                    </ul>
                </div>
                <div className="clearfix" />
            </div>
            
        );
    }
}



export default Order;