import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


import { NavLink } from 'react-router-dom';
class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            id: '',
            product_name: '',
            price: '',
            product_pic: '',
            describe: ''
        }

    }
    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: ' https://6093b5e8a7e53a001795161e.mockapi.io/Products',
    //         data: null
    //     }).then(res => {
    //         this.setState({
    //             product: res.data
    //         });
    //     }).catch(err => {
    //     });
    // }




    // render() {
    //     return (
    //       <div className="row">
    //         {this.state.product.map(element => {
    //           return (
    //             <div className="col-3">
    //               <div className="card" style={{ width: '500', height: '300' }}>

    //                 <div className="container">
    //                   <h4><b>{element.id}</b></h4>
    //                   <b>  {element.product_name}</b>
    //                   <div class="spacing">
    //                     <p>Type</p>

    //                     <img  src={element.product_pic}   width={300} height={200}></img>
    //                   </div>
    //                   <div class="spacing">
    //                     <p>Area</p>
    //                     <p>{element.price}</p>
    //                   </div>

    //                   <div style={{ display: 'flex' }}> <button style={{ width: '300px' }} type="button" class="btn btn-primary" onClick={this.handleBuy}>ADD</button>
    //                   </div>

    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     );
    //   }
    // }

    // componentWillUpdate() {
    //     if (this.state.sort === true) {
    //         axios({
    //             method: 'GET',
    //             url: 'http://localhost:3000/products?_sort=price&_order=asc&_limit=4',
    //             data: null
    //         }).then(res => {
    //             this.setState({
    //                 product: res.data
    //             });
    //         }).catch(err => {
    //         });
    //     } else {
    //         axios({
    //             method: 'GET',
    //             url: 'http://localhost:3000/products?_sort=price&_order=desc&_limit=4',
    //             data: null
    //         }).then(res => {
    //             this.setState({
    //                 product: res.data
    //             });
    //         }).catch(err => {
    //         });
    //     }

    // }

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
        var nam = target.name;
        var val = target.value;
        this.setState({
            [nam]: val
        });
    }

    onClear = () => {
        this.setState({
            id: '',
            product_name: '',
            price: '',
            product_pic: '',
            describe: ''

        });
    }

    onSave = (event) => {
        event.preventDefault();
        const pro = {
            product_name: this.state.product_name,
            product_pic: this.state.product_pic,
            price: this.state.price,
            describe: this.state.describe
        };
        axios.post(`https://6093b5e8a7e53a001795161e.mockapi.io/Products `, pro)
            .then(res => {
                alert("Đã thêm sản phẩm thành công")
                console.log(res);
                console.log(res.data);
            })
        this.state.products.push(pro);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://6093b5e8a7e53a001795161e.mockapi.io/Products',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            });
        }).catch(err => {
        });
    }

    onDelete = event => {
        event.preventDefault();
        axios.delete(`http://localhost:3000/products/${this.state.products[0].id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
// // 
// delete(e) {
// 	// e.preventDefault();
//     if(window.confirm('Are you sure?'))
// {
//     fetch('https://6093b5e8a7e53a001795161e.mockapi.io/Products' + e,{
//         method:'DELETE',
//         headers:{'OK':'aplication/json',
//         'Content-Type':'aplication/json'
//     }
//     })
// }
	// axios.delete('https://6093b5e8a7e53a001795161e.mockapi.io/Products')
	// .then(res => console.log(res.data));



    // render() {
    //     var { product, keyword } = this.state;
    //     return (
    //         <div>

    //                                      <div className="d-inline">
    //                                         <NavLink to={`/Add`} >
    //                                             <button className="btn btn-info ">Add <i className="fa fa-chevron-right" /></button>
    //                                             <div className="clearfix" />
    //                                         </NavLink>
    //                                     </div>
    //             {this.state.product.map((product) => {
    //                 return (
    //                     <React.Fragment>
    //                         <div className="col-sm-3 mt-4 row ">
    //                             <div className="single-item">
    //                                 <div className="ribbon-wrapper">
    //                                     <div className="ribbon sale">San Pham: {product.id}</div>
    //                                     <div className="ribbon sale">Mo Ta: {product.describe}</div>
    //                                 </div>
    //                                 <div className="single-item-header">
    //                                     <a><img src={product.product_pic} alt="" height="300" width="500" /></a>
    //                                 </div>
    //                                 <div className="single-item-body">
    //                                     <p className="single-item-title text-center text-danger t">{product.product_name}</p>
    //                                     <p className="single-item-price text-center">
    //                                         <span className="mb-3 t">Gia: ${product.price}</span>
    //                                     </p>
    //                                 </div>
    //                                 <div className="single-item-caption mt-1 ml-5">
    //                                     <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>

    //                                     <button type="submit" className="btn btn-primary  " onclick={this.onSubmit}>Update</button>
    //                                     <button type="submit" onclick={this.delete} className="btn btn-danger">Delete</button>
    //                                     <NavLink to="/AllProduct" className="btn btn-success">View</NavLink>
    //                                     <Button onclick={()=>this.delete(product.id)}>Dele</Button>
    //                                     {/* <NavLink to="/AllProduct" className="btn btn-success">View</NavLink>
    //                                      <div className="d-inline">
    //                                         <NavLink to={`/Add`} >
    //                                             <button className="btn btn-info ">Add <i className="fa fa-chevron-right" /></button>
    //                                             <div className="clearfix" />
    //                                         </NavLink>
    //                                     </div> */}
    //                                     {/*
    //                                     <div className="d-inline">
    //                                         <NavLink to={`/products/${product.id}/productdetail`}  >
    //                                             <button className="btn btn-info ">Details <i className="fa fa-chevron-right" /></button>
    //                                             <div className="clearfix" />
    //                                         </NavLink>
    //                                     </div> */}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </React.Fragment>
    //                 );
    //             })}
    //         </div>


    //     );
    // }

    render() 
    {
        return (
            
               
            <div>
                 {this.state.products.map(element =>
                     {
                        <div>
                    <div>
                        <form onSubmit={this.onSave}>

                            Name:
                            <input type='text' name="name" value={this.state.name} onChange={this.onChange} /><br /><br />
                            Type:
                            <input type='text' name="type" value={this.state.type} onChange={this.onChange} /><br /><br />
                            Quantity:
                            <input type='text' name="quantity" value={this.state.quantity} onChange={this.onChange} /><br /><br />
                            <div>
                                <button type="button" onClick={this.onClear} className="btn bt-primary">Clear</button>
                                <button type="submit" className="btn bt-primary">Add</button>
                                <button type="button" onClick={this.onUpdate} className="btn bt-primary">Update</button>
                            </div>
                        </form>
                    </div>
                        return (
                            <div>
                                <p>{element.id}</p>
                                <p>{element.name}</p>
                                <p>{element.type}</p>
                                <p>{element.quantity}</p>
                                <input type="button" value="Edit" onClick={this.onEdit} />
                                <input type="button" value="Delete" onClick={this.onDelete} />
                            </div>
                        );
                    
                </div>
                     })
                }
            </div>

        
        );
            }
    
            }








export default AllProduct;