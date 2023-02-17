import './App.css';
import React, { Component } from 'react';
import General from "./components/General";
import Education from './components/Education';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <General/>
        <Education/>
      </div>
    );
  }
}

export default App;
