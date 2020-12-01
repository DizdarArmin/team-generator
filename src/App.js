import React, {Component} from 'react'
import Nav from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';

class App extends Component {
  
  render () {
    return (
        <div>
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

              <div className="container-fluid footer" id="results">
                    <div className="container d-flex justify-content-between py-4">
                        <h5 >Copyright © 2020-2021 holymolysthlm.se – All Rights Reserved.</h5>
                    </div>
              </div>

    
            
        </div>
    )
  }
}

export default App;
