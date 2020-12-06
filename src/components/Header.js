import './Header.css';
import React, { Component } from "react";


class NavbarPage extends Component {
  constructor(props){
    super(props);
}
render() {
  return ( 
    <div>
        <div className="header">
        <h1 className="text-white">Like scrambled eggs, but scrambled teams!</h1>
        <p className="text-white">Free, fast and super easy team scrambler. Enter a list of
         names, <br></br> pick the number of teams, and let us generate the teams for you.
         </p>
         <div className="buttons">
          <a href="#get-started"><button className="btn btn-success">Get started!</button></a>   

         <br></br>
         <button  onClick ={() => this.props.modal(true)} className="btn btn-secondary">How does this work?</button>
         </div>

        </div>
        
    </div>
    );
  }
}

export default NavbarPage;