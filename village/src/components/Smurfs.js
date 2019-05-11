import React, { Component } from 'react';
import './smurfs.css';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const smurfList = this.props.smurfs
    return (
      <div className="Smurfs">
        <h1 className="Smurfsheader">Smurf Village</h1>
        <ul>
          {smurfList && smurfList.map((smurf, i) => {
            return (
             <div key={i} className="smurfList">
                <Smurf
                  setActiveSmurf={this.props.setActiveSmurf}
                  smurf={smurf}
                  key={i}
                />
             </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
