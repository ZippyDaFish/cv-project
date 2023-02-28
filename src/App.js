import './App.css';
import React, { Component } from 'react';
import General from "./components/General";
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';

class App extends Component {
  constructor(){
    super();

    this.state = {};
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.state);
  };

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitInfo}>
          <General doChange = {this.handleChange}/>
          <Education doChange = {this.handleChange}/>
          <Experience doChange = {this.handleChange}/>
          <button type="submit">submit</button>
        </form>
        <Overview info={this.state}/>
      </div>
    );
  }
}

export default App;
