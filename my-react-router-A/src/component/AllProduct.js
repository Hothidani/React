import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink, Fragment} from 'react-router-dom';
import axios from 'axios';
import { Header } from "./layout_page/Header";
//import { Footer } from "./layout_page/Footer";
import { Slide } from "./layout_page/Slide";



class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            sort: true,
        }

    }

 

    componentDidMount() {
        axios(
            {
                method: 'GET',
                url: ' http://localhost:3000/Products',
                data: null
            }
        ).then(res => {
            this.setState({
                product: res.data
            });
        }).catch(err => {
        });
    }

    componentWillUpdate() {
        if (this.state.sort === true) {
            axios({
                method: 'GET',
                url: ' http://localhost:3000/Products',
                data: null
            }).then(res => {
                this.setState({
                    product: res.data
                });
            }).catch(err => {
            });
        } else {
            axios({
                method: 'GET',
                url: ' http://localhost:3000/Products',
                data: null
            }).then(res => {
                this.setState({
                    product: res.data
                });
            }).catch(err => {
            });
        }

    }
    Low = () => {
        this.setState({
            sort: true
        });
    }

    High = () => {
        this.setState({
            sort: false
        });
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {			
        var { product,keyword } = this.state;			
            return (		
        <React.Fragment>			
       	
        <div className="mt-2">			
     	
        </div>			
        <div className="container mb-5 mt-5">			
        <marquee width="80%" scrollamount="10"><h4 className="txtdeepshadow">Các loại bánh tại cửa hàng</h4></marquee>			
        <div className="row">			
        <div className="col-md-6 beta-products-details">			
        <p className="pull-left t">Hiện có <span className="text-danger">{product.length}</span> sản phẩm</p>			
        <div className="clearfix"></div>			
        </div>			
        <div className="col-md-6">			
        <button onClick = {this.Low} className="beta-btn primary op">Thấp đến cao</button>			
        <button onClick = {this.High} className="beta-btn primary lz">Cao đến thấp</button>			
        </div>			
        </div>			
        {this.state.products.map((product,index) => {			
        return < Item			
        key={index}			
        product={product}			
        />			
        })}			
        </div>			
                    
        </React.Fragment>			
                );	
            }		
        }			
        
        class Item extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-sm-3 mt-4">
                    <div className="single-item">
                        <div className="ribbon-wrapper"><div className="ribbon sale">{this.showType(this.props.product.describe)}</div></div>
                        <div className="single-item-header">
                            <a><img src={this.props.product.product_pic} alt="" height="300" width="500" /></a>
                        </div>
                        <div className="single-item-body">
                            <p className="single-item-title text-center text-danger t">{this.props.product.name_product}</p>
                            <p className="single-item-price text-center">
                                <span className="mb-3 t">$ {this.props.product.price}</span>
                            </p>
                        </div>
                        <div className="single-item-caption mt-1 ml-5">
                            <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>
                            <NavLink to={`/products/${this.props.product.id}/productdetail`}>
                                <button className="beta-btn primary">Details <i className="fa fa-chevron-right" /></button>
                                <div className="clearfix" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}


export default AllProduct;