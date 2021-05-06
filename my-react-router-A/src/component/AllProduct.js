import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }

    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: ' https://6093b5e8a7e53a001795161e.mockapi.io/Products',
            data: null
        }).then(res => {
            this.setState({
                product: res.data
            });
            console.log(this.state.product);
        }).catch(err => {
        });
    }




    render() {
        return (
          <div className="row">
            {this.state.product.map(element => {
              return (
                <div className="col-3">
                  <div className="card" style={{ width: '500', height: '300' }}>
                  
                    {/* <img src={rooms.image} alt="Avatar" style={{ width: '100%' }} /> */}
                    <div className="container">
                      <h4><b>{element.id}</b></h4>
                      <b>  {element.product_name}</b>
                      <div class="spacing">
                        <p>Type</p>

                        <img  src={element.product_pic}   width={300} height={200}></img>
                      </div>
                      <div class="spacing">
                        <p>Area</p>
                        <p>{element.price}</p>
                      </div>

                      <div style={{ display: 'flex' }}> <button style={{ width: '300px' }} type="button" class="btn btn-primary" onClick={this.handleBuy}>ADD</button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    }




//     Low = () => {
//         this.setState({
//             sort: true
//         });
//     }

//     High = () => {
//         this.setState({
//             sort: false
//         });
//     }

//     onChange = (event) => {
//         var target = event.target;
//         var name = target.name;
//         var value = target.value;
//         this.setState({
//             [name]: value
//         });
//     }

//     render() {
//         return (

               
                  
//                     <div>
//                         {this.state.product.map((product, index) => {
//                         return (
//                             <React.Fragment>
//                                 <div className="col-sm-3 mt-4">
//                                     <div className="single-item">
//                                         <div className="ribbon-wrapper">
//                                             <div className="ribbon sale">{this.props.product.describe}</div>
//                                         </div>
//                                         <div className="single-item-header">
//                                             <a><img src={this.props.product.product_pic} alt="" height="300" width="500" /></a>
//                                         </div>
//                                         <div className="single-item-body">
//                                             <p className="single-item-title text-center text-danger t">{this.props.product.product_name}</p>
//                                             <p className="single-item-price text-center">
//                                                 <span className="mb-3 t">$ {this.props.product.price}</span>
//                                             </p>
//                                         </div>
//                                         <div className="single-item-caption mt-1 ml-5">
//                                             <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>
//                                             <NavLink to={`/products/${this.props.product.id}/productdetail`}>
//                                                 <button className="beta-btn primary">Details <i className="fa fa-chevron-right" /></button>
//                                                 <div className="clearfix" />
//                                             </NavLink>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </React.Fragment>
//                         );
//                     })}
//                     </div>
               

//         );
//     }
// }

 

export default AllProduct;