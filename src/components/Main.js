import './Main.css';
import Team from './Team';
import React, { Component} from "react";


let names = [];
let number = 0;
let submit = false;
let error = false;
let errorMessage = "";

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
    
}
function Error(){
    let element = null;
    if (error) {
        element =<div className="results-explain text-warning" id="results">
        <h1>Error</h1>
        <br></br>
        <h3>{errorMessage}</h3>
        </div>
    } 
    return element;
}

function Create(value, name, size){
    const teamBuild = <div className="col">
    <Team teamName = {name+1} players={value}/>
    </div>
    return teamBuild
}

function CreateTeams(numberOfTeams, names){
    let teams=[];
    let size = Math.ceil(names.length/numberOfTeams);
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
            number: "0",
            error: ""
        }
        this.base = this.state
        this.handleSubmit = this.handleSubmit.bind(this);     
    }


        handleSubmit(event){
            submit = false;
            error = false;
            event.preventDefault(); 
            this.setState({names: [], number: 0})

            let names = event.target.names.value;
            let sizes = parseFloat(event.target.howmany.value)

            if (names !== ""){ 
                names = names.split("\n") 
                
                if (names.length >= sizes ){
                    submit = true;
                    names = this.Randomize(names) 
                    this.setState({names:names, number: sizes});
                }
                else {
                    error = true
                    errorMessage = "Number of names can't be more then number of teams!";
                }              
            }
            else {
                error = true
                errorMessage = "Please add names.";
            }

        }

        clear = () => {
            this.setState(this.base);
            number = 0
            submit = false
            error = false;
        }

        Randomize = (o) => {
            for (
              var j, x, i = o.length;
              i;
              j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
            );
            return o;
          };

render() {
    return ( 
        <div className="text-white scramble-container">
        <h1>Get started</h1>
        <form onSubmit={this.handleSubmit} onReset={this.clear} id="scramble">
        <div className="row">
            <div className="col">
            <h3>Add names, one name per row.</h3>

                <textarea
                    name = "names"
                    rows="9"
                    ></textarea>
        
            </div>
            <div className="col-sm number">
            <h3>Number of teams.</h3>
                <select name="howmany">
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
                <button className="btn btn-success main-btn" form="scramble"  type="submit">Scramble!</button>
                <button className="btn btn-secondary main-btn" form="scramble" type="reset" >Reset</button>
            </div>
            <div className="col-sm">

            </div>
        </div>
        
        {Results()}
        {Error()}

        <div className="row team-container">
                {CreateTeams(this.state.number,this.state.names)}
        </div>

       </div>
      );
    }
  }
  
export default Main;