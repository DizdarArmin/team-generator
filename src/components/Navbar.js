import logo from '../logo.png'
import './Navbar.css';
import React, { Component } from "react";

class NavbarPage extends Component {

render() {
  return ( 
    <div>
        <div className="navbar">
            <div className="navbar-nav">
              <a href=".">
                <img className="navbar-brand" src={logo} height="auto"></img>
              </a>   
            </div>
            <div className="navbar-nav">
             <a className="navbar-item text-white" href=".">How it works</a>
            </div>
        </div>
    </div>
    );
  }
}

export default NavbarPage;