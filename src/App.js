import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Route} from 'react-router-dom';
import Mobile from './Mobile'

function App()
{
  return (
            <div classname="App">
            
              <BrowserRouter> 
              <Route exact path='/' component={Home}/> 
              <Route exact path='/mobile' component={Mobile}/>
              </BrowserRouter>
            </div>




    );
}

export default App;