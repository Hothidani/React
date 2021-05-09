import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Edit extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

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
          
            <link rel="stylesheet" href="./css.css" />
            <div className="content" style={{backgroundImage: 'url("./resources/img/background.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width: '100%', display: 'flex', alignItems: 'center'}}>
              <div className="container content-input content-input-wrap">
                <h3 className=" text-center "><b> EDIT</b></h3>
                <form action method="POST">
                  <br />
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Product name" />
                  </div><br></br>
                  <div className="form-group">
                    <input type="number" className="form-control" id="price" placeholder="Price *" />
                  </div><br></br>
                  <div className="form-group">
                    <input type="file" className="form-control" id="file" placeholder="Picture" />
                  </div><br></br>
                  <div className="form-group">
                    <input type="text" className="form-control" id="describe" placeholder="Describe *" />
                  </div><br></br>
                  {/* <input type="button" class="form-control btn btn-primary btn-lg btn-block" name="btn"> */}
                  <div className="buttonn">
                  <input type="submit" className="form-control btn btn-primary btn-lg btn-block" name="Save" defaultValue="Save" />
                  <input type className="form-control btn btn-primary btn-lg btn-block" name="clear" defaultValue="Clear" />
                  <input type className="form-control btn btn-primary btn-lg btn-block" name="back" defaultValue="back" />
               
                  </div>
                   </form>
                <div style={{color: 'black'}}>
                </div>
              </div>
            </div>
            {/* <div class="clearfix"></div> */}
            {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
          </div>
        );
    }
}

Edit.propTypes = {

};

export default Edit;