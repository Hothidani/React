import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import { Toast } from 'bootstrap';
import { NavLink } from 'react-router-dom';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            product_name: '',
            price: '',
            product_pic: '',
            describe: ''

        }

    }

    

onSubmit(e) {
	e.preventDefault();
	const product = {
		product_name: this.state.product_name,
		product_pic: this.state.product_pic,
        price: this.state.price,
        describe: this.state.describe
	}
	axios.post('https://6093b5e8a7e53a001795161e.mockapi.io/Products', product)
	.then(res => console.log(res.data));
}

    componentWillMount() {

    }

    componentDidMount() {
        var { match } = this.props;
        axios(
            {
                method: 'GET',
                url: 'https://6093b5e8a7e53a001795161e.mockapi.io/Products',
                data: null

            }
        ).then(res => {
            var data = res.data;
            this.setState({
                id: data.id,
                product_name: data.product_name,
                price: data.price,
                product_pic: data.product_pic,
                describe: data.describe

            });
        }).catch(err => {

        });

    }



    // OnChage = (event) => {
    //     var target = event.target;
    //     var name = target.name;
    //     var value = target.value;
    //     var type = target.type;
    //     if (type === 'file') {
    //         value = this.image.value.replace(/C:\\fakepath\\/i, "images");
    //     }
    //     this.setState(
    //         {
    //             [name]: value,
    //         }
    //     );
    // }

    OnSave = (e) => {
        e.preventDefault();
        var {
            id, product_name, product_pic, describe, price
        } = this.state;
        var { history } = this.props;
        if (id) {
            axios({
                method: 'PUT',
                url: 'https://6093b5e8a7e53a001795161e.mockapi.io/Products/${id}',
                data: {
                    product_name: product_name,
                    price: price,
                    product_pic: product_pic,
                    describe: describe
                }
            }).then(res => {
                toast.success("Cap nhat thanh cong")
            })
            history.goBack();
        }
    else{
        if(product_name ==='' && product_pic ===''&& price ==='' && 
        describe ==='')
        {
            toast.warn("Nhap day du noi dung", {});
        }else{
            axios({
                method: 'PUT',
                url: 'https://6093b5e8a7e53a001795161e.mockapi.io/Products/${id}',
                data: {
                    product_name: product_name,
                    price: price,
                    product_pic: product_pic,
                    describe: describe
                }
            }).then(res => {
                toast.success("Them thanh cong")
            })
            history.goBack();
        }
    }
    }
   

componentWillReceiveProps(nextProps) {

}

shouldComponentUpdate(nextProps, nextState) {

}

componentWillUpdate(nextProps, nextState) {

}

componentDidUpdate(prevProps, prevState) {

}

componentWillUnmount() {

}

render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ten San Pham</label>
                    <input type="text" className="col-sm-4" id="tensp" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Gia San Pham</label>
                    <input type="number" className="col-sm-4" id="giasp" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Chon Anh</label>
                    <input type="file" className="col-sm-4" id="anhsp" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mo Ta San Pham</label>
                    <input type="text" className="col-sm-4" id="motasp" placeholder=""  />
                </div>
                <button type="submit" className="btn btn-primary  " onclick={this.onSubmit}>Save</button>
                <button type="button" onclick={this.OnClear} className="btn btn-danger">Clear</button>
                <NavLink to="/AllProduct" className="btn btn-success">Back</NavLink>

            </form>
        </div>
    );
}
}



export default Add;