import './App.css';
import React, { Component } from 'react';
import General from "./components/General";
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <General/>
        <Education/>
        <Experience/>
      </div>
    );
  }
}

export default App;
