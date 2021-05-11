import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            id: '',
            product_name: '',
            price: '',
            describe: '',
            product_pic:''
        }
    }

    

    componentDidMount() {
        axios({
            method: 'GET',
            url: '  http://localhost:3000/users',
            data: null
        }).then(res => {
            this.setState({
                users: res.data
            });
        }).catch(err => {
        });
    }

   

    render() {
        return (
            <React.Fragment>
                <div>
                
                    
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
                                    <NavLink to={`/Update`} >
                                                <button className="btn btn-info ">Edit </button>
                                               <div className="clearfix" />
                                           </NavLink > 
                                    <NavLink to =" /Update" type="button" onClick={this.onEdit}  className="btn btn-success">Update</NavLink>
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

 

export default User;