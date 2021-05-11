import React, { Component } from 'react';
import './App.css';
import './css.css';

import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import Routers from './component/Routes';


const colorWord = { color: 'White' }
class App extends Component {
  render() {
    return (
      <Router>
{/* className="d-inline" */}
        <div className="a">
          <div className="nav-a" >
          <nav>
            <ul>
              <li ><Link to="/" style={colorWord}>Home</Link></li>
              <li > <Link to="/Order" style={colorWord}>Quản lý đơn hàng</Link></li>
              <li > <Link to="/AllProduct" style={colorWord}>Quản lý sản phẩm</Link></li>
              <li > <Link to="/User" style={colorWord}>Quản lý người dùng</Link></li>
            </ul>
          </nav>
        
          </div>
          <div className="nav-b" >
              <Switch>
                {this.showContentMenu(Routers)}
            </Switch>
          </div>
        </div>

      </Router>
    );

  }
  showContentMenu = (Routers) => {
    var result = null;
    if (Routers.length > 0) {
      result = Routers.map((route, index) => {
        return (

          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }

}

export default App;
