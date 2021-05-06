import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link,  Switch } from 'react-router-dom';
const colorWord = {color:'White'}
const Navigation = () =>{
    return(
      <nav>
        <h2>LOGO</h2>
        <ul className="nav-link">
          <li>
          <NavLink to="/" style = {colorWord} exact>Home</NavLink></li>
          <li>
          <NavLink to="/Content" style = {colorWord} exact>Content</NavLink></li>
          <li>
          <NavLink to="/Contact" style = {colorWord} exact>Contact</NavLink></li>
        </ul>
      </nav>
    )
  }

export default Navigation