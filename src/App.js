import React, {Component, useState} from 'react'
import Nav from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Modal from 'react-modal'

const close = <FontAwesomeIcon icon={faTimesCircle} />

function App(){
  const [modalIsOpen, setModal] = useState(false)
    return (
        <div>
         <Modal isOpen={modalIsOpen} onRequestClose={()=> setModal(false)}  
         style={{
      overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.10)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: 'none',
      background: '#0B252C',
      color: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '30px'
      
    }
  }}>
        <a onClick={()=> setModal(false)} style={{float: 'right', fontSize: '32px'}}>{close}</a>
        <h1 className="title">How it works.</h1>
        <br/>
        <br/>
        <h4>
        As we said, like scrambled eggs but scrambled teams! 
        Its free, fast and super easy team scrambler. 
        </h4>
        <br/>
        <h3>
        This is the tool for us who like a good scramble of teams. 
        Whether youre playing football or doing something fun at work, 
        it works for all occasions. Just enter the names of the participants, 
        choose the number of teams you want to divide the participants into and 
        let us take care of the rest.
        </h3>
        <br/>
        <h3 >
        If you have any questions please contact us at <span> <a className="text-success" href="mailTo:hello@holymolysthlm.se">hello@holymolysthlm.se</a></span>
        </h3>

      </Modal>
            <div className="wrapper">
                <div className="header-wrapper">
                  <div className="container">   
                    <Nav modal = {setModal}/>
                    <Header modal = {setModal}/>  
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

export default App;
