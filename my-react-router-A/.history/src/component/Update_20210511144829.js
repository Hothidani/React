import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Update extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <React.Fragment>
                <div>
                <form onSubmit={this.onEdit}>
                    <div className="form-group">
                        <label  >Gia San Pham</label>
                        <input name="product_name" type="text" className="col-sm-4"   placeholder="Nhap ten sp"  onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label  >Gia San Pham</label>
                        <input name="price" type="number" className="col-sm-4"   placeholder="Nhap gia"  onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label  >Chon Anh</label>
                        <input name="product_pic" ref={(input) =>{this.product_pic= input}} type="file" className="col-sm-4"  placeholder="" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label  >Mo Ta San Pham</label>
                        <input name="describe" type="text" className="col-sm-4" id="motasp" placeholder="Mo ta sp" onChange={this.onChange}  />
                    </div>
                    <button type="submit"  className="btn btn-primary  ">Save</button>

            </form>
                </div>
            </React.Fragment>
            </div>
        );
    }
}

Update.propTypes = {

};

export default Update;



