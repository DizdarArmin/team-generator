import './Header.css';
import React, { Component } from "react";

class Teams extends Component {
  constructor(props){
    super(props);
}



render() {  
  return ( 
    <div className="container">
          {this.props.names.map(name => <div className="row">
            {name}
            </div>)}
    </div>
    );
  }
}

export default Teams;