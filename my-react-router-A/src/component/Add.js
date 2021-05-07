import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={
            product_name:'',
            price:'',
            product_pic:'',
            describe:''

        }

    }

    componentWillMount() {

    }

    componentDidMount() {
        var{match} =this.props;
    
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
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ten San Pham</label>
                        <input type="text" className="col-sm-4" id="tensp"  placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Gia San Pham</label>
                        <input type="number" className="col-sm-4" id="giasp"  placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Chon Anh</label>
                        <input type="file" className="col-sm-4" id="anhsp"  placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mo Ta San Pham</label>
                        <input type="text" className="col-sm-4" id="motasp"  placeholder="" />
                    </div>
                    <button type="button" class="btn btn-primary  ">Save</button>
                    <button type="button" class="btn btn-primary">Clear</button>
                    <button type="button" class="btn btn-primary">Back</button>

                </form>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;