import React, {Component} from 'react'
import Nav from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';

class App extends Component {
  
  render () {
    return (
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="container">   
            <Nav/>
            <Header/>  
          </div>
        </div>

        <div id="get-started" className="scramble-wrapper">
          <div className="container">
              <Main/>
          </div>
        </div>




      </div>


    )
  }
}

export default App;
