import './Main.css';
import Teams from './Teams';
import React, { Component} from "react";


let names = [];
let number = 1;
let teams = [];



class Main extends Component {
    constructor(){
        super();
        this.state = {
            names: "",
            number: "1"
        }
        this.base = this.state

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNumber = this.handleNumber.bind(this);       
    }

        TeamMember = () => {
            <div>Armin</div>
            console.log("here");
        }

        handleChange(event) {
            this.setState({names: event.target.value});
            names = this.state.names.split("\n");
            console.log(names)
        }
        handleNumber = (event) => {
            this.setState({
                number: event.target.value
            }, () => {
                console.log(this.state.number)
            })
        }

        handleSubmit(event){
            event.preventDefault();
            names = this.state.names.split("\n");
            number = this.state.number;            
            console.log(names);
            console.log(number);

        }
        clear = () => {
            this.setState(this.base);
        }

render() {
    return ( 
        <div className="container text-white scramble-container">
        <h1>Get started</h1>
        <form onSubmit={this.handleSubmit} id="scramble">
        <div className="row">
            <div className="col">
            <h2>Add names, one name per row.</h2>

                <textarea
                    value = {this.state.names}
                    onChange={this.handleChange}
                    rows="9"
                    ></textarea>
        
            </div>
            <div className="col-sm number">
            <h2>Number of teams.</h2>
                <select value={this.state.number}  onChange={this.handleNumber}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>  
 
        </div>
        </form>  
        <div className="row buttons">
            <div className="col-sm">
                <button className="btn btn-success main-btn" form="scramble" type="submit">Scramble!</button>
                <button className="btn btn-secondary main-btn" onClick={this.clear}>Reset</button>
            </div>
            <div className="col-sm">

            </div>
        </div>
        <div className="row">
        </div>

       </div>
      );
    }
  }
  
export default Main;