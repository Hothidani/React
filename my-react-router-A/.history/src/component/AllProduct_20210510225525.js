// import React, { Component } from 'react';
// import axios from 'axios';
// import Add from './Add';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import { NavLink } from 'react-router-dom';
// class AllProduct extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             product: []
//         }

//     }
//     componentDidMount() {
//         axios({
//             method: 'GET',
//             url: ' https://6093b5e8a7e53a001795161e.mockapi.io/Products',
//             data: null
//         }).then(res => {
//             this.setState({
//                 product: res.data
//             });
//         }).catch(err => {
//         });
//     }




//     // render() {
//     //     return (
//     //       <div className="row">
//     //         {this.state.product.map(element => {
//     //           return (
//     //             <div className="col-3">
//     //               <div className="card" style={{ width: '500', height: '300' }}>

//     //                 <div className="container">
//     //                   <h4><b>{element.id}</b></h4>
//     //                   <b>  {element.product_name}</b>
//     //                   <div class="spacing">
//     //                     <p>Type</p>

//     //                     <img  src={element.product_pic}   width={300} height={200}></img>
//     //                   </div>
//     //                   <div class="spacing">
//     //                     <p>Area</p>
//     //                     <p>{element.price}</p>
//     //                   </div>

//     //                   <div style={{ display: 'flex' }}> <button style={{ width: '300px' }} type="button" class="btn btn-primary" onClick={this.handleBuy}>ADD</button>
//     //                   </div>

//     //                 </div>
//     //               </div>
//     //             </div>
//     //           );
//     //         })}
//     //       </div>
//     //     );
//     //   }
//     // }

//     // componentWillUpdate() {
//     //     if (this.state.sort === true) {
//     //         axios({
//     //             method: 'GET',
//     //             url: 'http://localhost:3000/products?_sort=price&_order=asc&_limit=4',
//     //             data: null
//     //         }).then(res => {
//     //             this.setState({
//     //                 product: res.data
//     //             });
//     //         }).catch(err => {
//     //         });
//     //     } else {
//     //         axios({
//     //             method: 'GET',
//     //             url: 'http://localhost:3000/products?_sort=price&_order=desc&_limit=4',
//     //             data: null
//     //         }).then(res => {
//     //             this.setState({
//     //                 product: res.data
//     //             });
//     //         }).catch(err => {
//     //         });
//     //     }

//     // }

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
    
// delete(e) {
// 	e.preventDefault();
//     if(window.confirm('Are you sure?'))
// {
//     fetch('https://6093b5e8a7e53a001795161e.mockapi.io/Products' + e,{
//         method:'DELETE',
//         headers:{'OK':'aplication/json',
//         'Content-Type':'aplication/json'
//     }
//     })
// }
// 	axios.delete('https://6093b5e8a7e53a001795161e.mockapi.io/Products')
// 	.then(res => console.log(res.data));
// }


//     render() {
//         var { product, keyword } = this.state;
//         return (
//             <div>

//                                          <div className="d-inline">
//                                             <NavLink to={`/Add`} >
//                                                 <button className="btn btn-info ">Add <i className="fa fa-chevron-right" /></button>
//                                                 <div className="clearfix" />
//                                             </NavLink>
//                                         </div>
//                 {this.state.product.map((product) => {
//                     return (
//                         <React.Fragment>
//                             <div className="col-sm-3 mt-4 row ">
//                                 <div className="single-item">
//                                     <div className="ribbon-wrapper">
//                                         <div className="ribbon sale">San Pham: {product.id}</div>
//                                         <div className="ribbon sale">Mo Ta: {product.describe}</div>
//                                     </div>
//                                     <div className="single-item-header">
//                                         <a><img src={product.product_pic} alt="" height="300" width="500" /></a>
//                                     </div>
//                                     <div className="single-item-body">
//                                         <p className="single-item-title text-center text-danger t">{product.product_name}</p>
//                                         <p className="single-item-price text-center">
//                                             <span className="mb-3 t">Gia: ${product.price}</span>
//                                         </p>
//                                     </div>
//                                     <div className="single-item-caption mt-1 ml-5">
//                                         <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>

//                                         <button type="submit" className="btn btn-primary  " onclick={this.onSubmit}>Update</button>
//                                         <button type="submit" onclick={this.delete} className="btn btn-danger">Delete</button>
//                                         <NavLink to="/AllProduct" className="btn btn-success">View</NavLink>
//                                         {/* <NavLink to="/AllProduct" className="btn btn-success">View</NavLink>
//                                          <div className="d-inline">
//                                             <NavLink to={`/Add`} >
//                                                 <button className="btn btn-info ">Add <i className="fa fa-chevron-right" /></button>
//                                                 <div className="clearfix" />
//                                             </NavLink>
//                                         </div> */}
//                                         {/*
//                                         <div className="d-inline">
//                                             <NavLink to={`/products/${product.id}/productdetail`}  >
//                                                 <button className="btn btn-info ">Details <i className="fa fa-chevron-right" /></button>
//                                                 <div className="clearfix" />
//                                             </NavLink>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </React.Fragment>
//                     );
//                 })}
//             </div>


//         );
//     }
// }



// export default AllProduct;


 import { NavLink } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
//import { toast } from 'react-toastify';

class AllProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            id: '',
            product_name: '',
            price: '',
            describe: '',
            product_pic:''
        }
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
            describe: '',
            product_pic:''
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
        axios({
            method: 'POST',
            url: `https://6093b5e8a7e53a001795161e.mockapi.io/Products`,
            data: pro
        }).then(res => {
           res.data = pro;
           alert("Đã thêm một sản phẩm thành công")
        }).catch(err => {
        });
       /* axios.post(`https://6093b5e8a7e53a001795161e.mockapi.io/Products`, pro)
            .then(res => {
                alert("Đã thêm một sản phẩm thành công")
                console.log(res);
                console.log(res.data);
            })
        this.state.products.push(pro);*/
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '  http://localhost:3000/Products',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            });
        }).catch(err => {
        });
    }

    


    onDelete = (id) => {
        alert ("Delete");
        this.setState({
          products:this.state.products.filter(item=>item.id!=id)
        })
       axios({
          method: 'DELETE',
          url:`https://6093b5e8a7e53a001795161e.mockapi.io/Products/${id}`,
      }).then (res =>{
          console.log(res);
          console.log(res.data);
      }).catch(err =>{
      })   
      }

    render() {
        return (
            <React.Fragment>
                <div>
                <div className="d-inline">
                                           <NavLink to={`/Add`} >
                                                <button className="btn btn-info ">Add <i className="fa fa-chevron-right" /></button>
                                               <div className="clearfix" />
                                           </NavLink >                   
               </div>
                    <div>
                    <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <h2>{this.state.product_name}</h2>
                        <input name="product_name" type="text" className="col-sm-4" id="tensp" placeholder="Nhap ten sp"  onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label  >Gia San Pham</label>
                        <input name="price" type="number" className="col-sm-4" id="giasp" placeholder="Nhap gia"  onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label  >Chon Anh</label>
                        <input name="product_pic" ref={(input) =>{this.product_pic= input}} type="file" className="col-sm-4" id="anhsp" placeholder="" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label  >Mo Ta San Pham</label>
                        <input name="describe" type="text" className="col-sm-4" id="motasp" placeholder="Mo ta sp" onChange={this.onChange}  />
                    </div>
                    <button type="submit"  className="btn btn-primary  ">Save</button>
                    <button type="button" onclick={this.onClear} className="btn btn-danger">Clear</button>
                    <button type="button" onClick={this.onUpdate}  className="btn btn-success">Update</button>

            </form>
                    
                    </div>
                    {this.state.products.map(element => {
                        return (
                            <div>
                                <p>{element.id}</p>
                                <p>{element.product_name}</p>
                                <p>{element.price}</p>
                                <p>{element.describe}</p>
                                <img src={element.product_pic} alt="" height="300" width="500" />
                                <div>
                                    <button type="button" onClick={this.onEdit}  className="btn btn-success">Edit</button>
                                    <button type="button"  onClick={()=>this.onDelete(element.id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

class Update extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.onUpdate}>
                        Name:
                        <input type='text' name="name" value={this.state.name} onChange={this.onChange} /><br /><br />
                        Type:
                        <input type='text' name="type" value={this.state.type} onChange={this.onChange} /><br /><br />
                        Quantity:
                        <input type='text' name="quantity" value={this.state.quantity} onChange={this.onChange} /><br /><br />
                        <div>
                            <button type="submit" className="btn bt-primary">Update</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AllProduct;
