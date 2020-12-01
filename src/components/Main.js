import './Main.css';
import Team from './Team';
import React, { Component} from "react";


let names = [];
let number = 1;
let teams = [];
let players = ["Armin", "Dizdar", "Aida", "Agic"];
let players1 = ["Halid", "Saban", "Hakala", "Kemal"];
let players2 = ["Serif", "Selma", "Zorica"];



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
        <div className="text-white scramble-container">
        <h1>Get started</h1>
        <form onSubmit={this.handleSubmit} id="scramble">
        <div className="row">
            <div className="col">
            <h3>Add names, one name per row.</h3>

                <textarea
                    value = {this.state.names}
                    onChange={this.handleChange}
                    rows="9"
                    ></textarea>
        
            </div>
            <div className="col-sm number">
            <h3>Number of teams.</h3>
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
        <div className="results-explain" id="results">
            <h1>Results</h1>
            <br></br>
            <div>
            <h3>Here are the teams. If the number of participants is unequal 
                to the number of teams, some teams will have fewer or more players.</h3>
            </div>
        </div>
        <div className="row team-container">

            <div className="col">
                <Team teamName = "1" players={players}/>
            </div>

            <div className="col">
                <Team teamName = "2" players={players1}/>
            </div>

            <div className="col">
                <Team teamName = "3" players={players2}/>
            </div>

        </div>

       </div>
      );
    }
  }
  
export default Main;