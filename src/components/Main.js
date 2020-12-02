import './Main.css';
import Team from './Team';
import React, { Component} from "react";


let names = [];
let namesBase = []
let number = 0;
let submit = false;
let players = ["Armin", "Dizdar", "Aida", "Agic"];
let players1 = ["Halid", "Saban", "Hakala", "Kemal"];
let players2 = ["Serif", "Selma", "Zorica"];


function Results(){
    let result = null;
    if (submit) {
        result =<div className="results-explain" id="results">
        <h1>Results</h1>
        <br></br>
        <div>
        <h3>Here are the teams. If the number of participants is unequal 
            to the number of teams, some teams will have fewer or more players.</h3>
        </div> 
        </div>
    } 
    return result;
    submit = false;
}

function Create(value, name, size){
    const teamBuild = <div className="col">
    <Team teamName = {name+1} players={value}/>
    </div>
    return teamBuild
}

function CreateTeams(numberOfTeams){
    let teams=[];
    let size = names.length/numberOfTeams;
    for (let i = 0; i < numberOfTeams; i++){   
        let team = [];
        for(let i = 0; i < size; i++){
            let random = Math.floor(Math.random() * names.length); 
            team.push(names[random]);
            names.splice(random,1);
        }
        teams.push(Create(team,i))
    }
    return teams;
}



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
            if(this.state.names !== undefined){
                names = this.state.names.split("\n");
                console.log(names)
            }   
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
                if(this.state.names !== ""){
                    names = this.state.names.split("\n");
                    this.handleChange(event)
                    number = this.state.number;        
                    console.log(names);
                    console.log(number);
                    for(let i = 0; i < number; i++){
                        let team;
                        window[team + '1']= [];
                        console.log ({team});
                    }
                }
                submit = true;        
        }
        clear = () => {
            this.setState(this.base);
            number = 0
            names = this.base.names;
            submit = false
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
        
        {Results()}

        <div className="row team-container">
                {CreateTeams(number)}
        </div>

       </div>
      );
    }
  }
  
export default Main;