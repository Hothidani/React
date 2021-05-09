import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css.css';


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
            <title>Sign_UP Page -- Fa -- PNV</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
            <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./css.css" />
            <div className="content" style={{backgroundImage: 'url("./resources/img/background.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width: '100%', display: 'flex', alignItems: 'center'}}>
              <div className="container content-input content-input-wrap">
                <h3 className=" text-center "><b> EDIT</b></h3>
                <form action method="POST">
                  <br />
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Product name" />"&gt;
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" id="price" placeholder="Price *" />
                  </div>
                  <div className="form-group">
                    <input type="file" className="form-control" id="file" placeholder="Picture" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="describe" placeholder="Describe *" />
                  </div>
                  {/* <input type="button" class="form-control btn btn-primary btn-lg btn-block" name="btn"> */}
                  <input type="submit" className="form-control btn btn-primary btn-lg btn-block" name="Save" defaultValue="Save" />
                  <input type className="form-control btn btn-primary btn-lg btn-block" name="clear" defaultValue="Clear" />
                  <input type className="form-control btn btn-primary btn-lg btn-block" name="back" defaultValue="back" />
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