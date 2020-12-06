import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './Team.css';

const element = <FontAwesomeIcon icon={faUser} />
const users = <FontAwesomeIcon icon={faUsers} />
const copyToClipBoard = async copyMe => {
  try {
    await navigator.clipboard.writeText(copyMe);
  } catch (err) {
  }
};
class Team extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: this.props.players
    }
}

render() {  

  var names = [];
  names.push(this.props.teamName);
  for (let i = 0; i < this.state.members.length; i++){
    names.push(this.props.players);
  }
  
  return ( 
    <div>
        <ul>
          <button className="btn btn-name team-name">
        <li>{users} <span style={{marginLeft: "20px"}}>Team {this.props.teamName}</span>
              </li>
              </button>
        {this.props.players.map(function(name, i){
            return (
              <li>
              <button key={i} className="btn btn-success btn-name">
              {element} 
              <span style={{marginLeft: "20px"}}>{i+1}. {name}</span>
              </button>
              </li>
              )
          })}
          <li><button className="btn btn-secondary btn-name copy" onClick={() => copyToClipBoard("Team - " + this.props.teamName + ": " + this.props.players)}>Copy names</button></li>
          </ul>
    </div>
    );
  }
}

export default Team;