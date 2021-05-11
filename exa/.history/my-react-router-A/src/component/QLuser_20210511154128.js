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
                    {this.state.users.map(element => {
                        return (
                            <div>
                                <p>{element.id}</p>
                                <p>{element.user_name}</p>
                                <p>{element.email}</p>
                                <p>{element.phone}</p>
                                <p>{element.address}</p>
                                <img src={element.user_avatar} alt="" height="300" width="500" />
                                <div>
                                    <NavLink to={`/Update`} >
                                                <button className="btn btn-info ">Edit </button>
                                               <div className="clearfix" />
                                           </NavLink > 
                                    
                                    <button type="button" onClick={this.onEdit}  className="btn btn-success">Block</button>
                                   
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