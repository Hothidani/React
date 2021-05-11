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
        <div>
          <div className="d-inline">
          <nav>
            <ul>
              <li className="d-inline"><Link to="/" style={colorWord}>Home</Link></li>
              <li className="d-inline"><Link to="/About" style={colorWord} >About</Link></li>
              <li className="d-inline"> <Link to="/Service" style={colorWord}>Service</Link></li>
              <li className="d-inline"> <Link to="/Contact" style={colorWord}>Contact</Link></li>
              <li className="d-inline" > <Link to="/AllProduct" style={colorWord}>AllProduct</Link></li>
              <li className="d-inline"> <Link to="/Update" style={colorWord}>Update</Link></li>
            </ul>
          </nav>
        
          </div>
          <div className="d-inline">
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
