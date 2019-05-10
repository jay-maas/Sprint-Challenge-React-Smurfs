import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
        }
    };
  }


  handleInputChange = e => {
    let value = e.target.value
    const name = e.target.name
    this.setState(prevState => ({ 
      smurf: {
        ...prevState.smurf,
        [name]: value
        }
      })
    );
  }

  componentDidMount() {
    this.props.smurf && this.setState({
      smurf: {...this.props.smurf}
    })
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf)
  }

  updateSmurf = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state.smurf)
  }

  render() {
    const formHelper = this.props.smurf ? this.updateSmurf : this.addSmurf
    return (
      <div className="SmurfForm">
        <form onSubmit={formHelper}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{ this.props.smurf ? `Update Smurf` : `Add to the village` }</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
