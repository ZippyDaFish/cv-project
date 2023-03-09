import './App.css';
import './styles/Content.css'
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
      <div className='content'>
        <div>
          <form onSubmit={this.onSubmitInfo}>
            <div>
              <h2>General Info</h2>
              <General doChange = {this.handleChange}/>
            </div>
            <div>
              <h2>Education</h2>
              <Education doChange = {this.handleChange}/>
            </div>
            <div>
              <h2>Experience</h2>
              <Experience doChange = {this.handleChange}/>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
        <div>
          <Overview info={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
