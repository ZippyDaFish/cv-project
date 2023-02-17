import './App.css';
import React, { Component } from 'react';
import General from "./components/General";
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(){
    super();
  }
  onSubmitInfo = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitInfo}>
          <General/>
          <Education/>
          <Experience/>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default App;
