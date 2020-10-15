import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ChoroplethMap from './components/ChoroplethMap';
import { Container, Nav } from "./styled-components";

// <ChoroplethMap data={this.state.data}/>
class App extends Component {
  state = {
    data: [
      ["CA", 75], ["NY", 10]],
  }
  render() {
    return (
      <Container className ="App">
        <Container className = "header">
          <h3 className = "header-style">Faculty Hiring Analysis Dashboard</h3>
        </Container>
         <Container className="pr-5 pl-5 pt-5 pb-5">
          {/*Row 0*/}
          <Container className="row">
            <Container className="col-md-12 mb-4">
              <Container className="card big-grid-card card-colour">
                <Container>
                  <h4>
                    Graph 1 (Male:Female Ratio in Top 20 CS Colleges)
                  </h4>
                </Container>

                <Container className="card-value pt-4">
                  <div style={{height:"100vh"}}>
                    <ChoroplethMap data = {this.state.data}/>
                  </div>
                </Container>
              </Container>
            </Container>
          </Container>

          {/* Row 1 */}
          <Container className="row">
            <Container className="col-md-6 mb-4">
              <Container className="card grid-card card-colour">
                <Container>
                  <h4>
                    Graph 2
                  </h4>
                </Container>

                <Container className="card-value pt-4">
                  <span>
                    Hello World!
                  </span>
                </Container>
              </Container>
            </Container>

            <Container className="col-md-6 mb-4">
              <Container className="card grid-card card-colour">
                <Container>
                  <h4>
                    Graph 3
                  </h4>
                </Container>
                <Container className="card-value pt-4">
                  <span>
                    Hello World!
                  </span>
                </Container>
              </Container>
            </Container>
          </Container>

          {/* Row 2*/}
          <Container className="row">
            <Container className="col-md-6 mb-4">
              <Container className="card grid-card card-colour">
                <Container>
                  <h4>
                    Graph 4
                  </h4>
                </Container>
                <Container className="card-value pt-4">
                  <span>
                    Hello World!
                  </span>
                </Container>
              </Container>
            </Container>
            <Container className="col-md-6 mb-4">
              <Container className="card grid-card card-colour">
                <Container>
                  <h4>
                    Graph 5
                  </h4>
                </Container>
                <Container className="card-value pt-4">
                  <span>
                    Hello World!
                  </span>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      
    );
  }
}

export default App;