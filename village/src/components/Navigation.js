import React from 'react';
import { NavLink } from 'react-router-dom';
import smurfHouse from './assets/images/smurfHouse.png';
import papaSmurf from './assets/images/papaSmurf.png';

class Navigation extends React.Component{
    render(){
        return(
            <div style={{width: "15vw", height: "100%", position: "absolute", top: "0", left: "0", display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(34, 167, 240, .9)", textAlign: "center"}}>

            <NavLink
            to="/"
            >
            <img style={{padding: "5% 10% 0", width: "50%", height: "auto"}}src={smurfHouse} />
            </NavLink>

            <NavLink
            to="/"
            style={{color: "white", textDecoration: "none", fontSize: "2em"}}
            >
            Home
            </NavLink>

            <NavLink
            style={{position:"absolute", bottom: "0", marginBottom: "5%", color: "white", textDecoration: "none", fontSize: "1.5em"}}
            to="/new-smurf-form"
            >
            <img src={papaSmurf} alt="papaSmurf" style={{width: "50%", height: "auto", display: "flex"}} />
            Add A Smurf
            </NavLink>

            </div>
        )
    }
}

export default Navigation;