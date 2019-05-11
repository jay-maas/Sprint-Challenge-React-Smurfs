import React from 'react';
import { Link } from 'react-router-dom'

class Smurf extends React.Component {
  clickHandler = () => {
    let smurf = this.props.smurf
    this.props.setActiveSmurf(smurf)
    console.log(smurf)
  }

  deleteSmurf = event => {
    event.preventDefault()
    this.props.deleteSmurf(event.target.id)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="Smurf">
      <Link 
      onClick={this.clickHandler}
      exact to={`/smurfs/${this.props.smurf.id}`}
      ><h3>{this.props.smurf.name}</h3></Link>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
        <button id={this.props.smurf.id} className="deleteSmurfButton" onClick={this.deleteSmurf}>Delete Smurf</button>
        <Link className="updateSmurf" onClick={this.clickHandler} to="/update-smurf-form">Update Smurf</Link>
      </div>
    );
  };
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

