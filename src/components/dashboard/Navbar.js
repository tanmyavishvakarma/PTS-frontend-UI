import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';
import './navbar.css'
import Logo from '../assets/pts.jpg'
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper bold">
                        <Link to="/"><div className="logo left"><img className="logoimg"src={Logo} width="64px"></img></div></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link className="links white-text text-darken-3 center-align" to="/findJob">Home</Link></li>
                                <li><Link className="white-text text-darken-3" to="/postJob">About</Link></li>
                                <li><Link className="white-text text-darken-3" to="/login">Events</Link></li>
                                <li><Link className="white-text text-darken-3"  to="/register">Contact</Link></li>
                            </ul>
                    </div>
                </nav>
                <ul className="sidenav grey" id="slide-out">
                <li><Link className="sidenav-close white-text" to="/findJob">Home</Link></li>
            <li><Link className="sidenav-close white-text " to="/postJob">About</Link></li>
            <li><Link className="sidenav-close white-text" to="/login">Events</Link></li>
            <li><Link className="sidenav-close white-text" to="/register">Register</Link></li>
          
                </ul>
        </div>
        );
    }
}
export default Navbar;