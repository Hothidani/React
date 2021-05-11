import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            id: '',
            user_name: '',
            email: '',
            address: '',
            phone: '',
            user_avatar:''
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
                
                                <table>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                                {this.state.users.map(element => {
                        return (
                            
                                <tr>
                                    <td>{element.id}</td>
                                    <td>{element.user_name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phone}</td>
                                    <td>{element.address}</td>
                                    <td> 
                                        <button type="button"   className="btn btn-success">Block</button> 
                                        <button type="button"   className="btn btn-success">Block</button>                                 
                                    </td>
                                </tr>
                                  
                                   );})}
                                 </table>
                </div>
            </React.Fragment>
        );
    }
}

 

export default User;