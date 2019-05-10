import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import { Route, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import smurfVillage from './components/assets/images/smurfVillage.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: []
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

  setActiveSmurf = activeSmurf => {
    this.setState({
      activeSmurf: activeSmurf
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
        this.props.history.push("/")
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateSmurf = updatedSmurf => {
    axios
      .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then(response => {
        console.log(response)
        this.setState({
          smurfs: response.data
        })
        this.props.history.push("/")
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteSmurf = smurfId => {
    console.log(smurfId)
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        console.log(response)
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">

       <Navigation/>

       <img src={smurfVillage} alt="smurfVillage" style={{width: "100", height: "100", position: "absolute", bottom: "0", right: "0"}} />

        <Route 
        exact path="/"
        render={props => <Smurfs {...props} setActiveSmurf={this.setActiveSmurf} smurfs={this.state.smurfs}  /> }
        />

        <Route 
        path="/new-smurf-form"
        render={props => <SmurfForm {...props} addSmurf={this.addSmurf}  /> }
        />

        <Route 
        path="/update-smurf-form"
        render={props => <SmurfForm {...props} updateSmurf={this.updateSmurf} smurf={this.state.activeSmurf}  /> }
        />

        <Route
        path="/smurfs/:id"
        render={props => <Smurf {...props} 
        setActiveSmurf={this.setActiveSmurf}
        deleteSmurf={this.deleteSmurf}
        smurf={this.state.activeSmurf} />}
        />

        {/* <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs}  /> */}
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
