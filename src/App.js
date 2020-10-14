import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import ChoroplethMap from './components/ChoroplethMap';
// <ChoroplethMap data={this.state.data}/>
class App extends Component {
  state = {
    data: [
      ["CA", 75], ["NY", 10]],
  }
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <p>Faculty Hiring Analysis</p>
        </div>

        <div style={{height:"100vh", width: "100vw"}} className = "Horizontal-Widget">
          <ChoroplethMap data={this.state.data}/>
        </div>
        <div style={{height:"100vh", width: "100vw"}} className = "Horizontal-Widget">
          <ChoroplethMap data={this.state.data}/>
        </div>

        
      </div>
      
    );
  }
}

export default App;