import React from 'react'
import { Switch, Route } from 'react-router-dom'

/** Layout */
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

/** Pages */
import Index from './pages/Index'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Index/>} /> 
        <Route path="/contacto" exact render={() => <Index/>} /> 
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
