import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      this.setState({
        smurfs: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log(response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">

       <Navigation/>

        <Route 
        exact path="/"
        render={props => <Smurfs {...props} smurfs={this.state.smurfs}  /> }
        />

        <Route 
        exact path="/smurf-form"
        render={props => <SmurfForm {...props} addSmurf={this.addSmurf}  /> }
        />

        {/* <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs}  /> */}
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
