import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Aboutus from './components/pages/About-us';
import SignUp from './components/pages/Sign-up';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.js';


function App() {
  return (
    <>
      <Router>
        <Navbar />  
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/Services' component={Services} />
          <Route path='/About-us' component={Aboutus} />
          <Route path='/Sign-up' component={SignUp} /> 
          </Switch>
      </Router>
     
    </>
  );
}

export default App;
