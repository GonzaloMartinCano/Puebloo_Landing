import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Index from './components/index/Index'

import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Index/>} /> 
      

      </Switch>

    </div>
  );
}

export default App;
