import React, { Component } from 'react';
import './App.css';
import './css.css';

import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import Routers from './component/Routes';


const colorWord = { color: 'White' }
class App extends Component {
  render() {
    return (
      <Router style={{display:flex}}>
{/* className="d-inline" */}
        <nav>
          <ul >
            <li ><Link to="/" style={colorWord}>Home</Link></li>
            <li ><Link to="/About" style={colorWord} >About</Link></li>
            <li > <Link to="/Service" style={colorWord}>Service</Link></li>
            <li > <Link to="/Contact" style={colorWord}>Contact</Link></li>
            <li > <Link to="/AllProduct" style={colorWord}>AllProduct</Link></li>
            <li > <Link to="/Update" style={colorWord}>Update</Link></li>
          </ul>
        </nav>
        <Switch>
          {this.showContentMenu(Routers)}
        </Switch>

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