import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';
import './navbar.css'
import Logo from '../assets/logo2.png'
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper white">
                        <Link to="/"><div className="logo left"><img className="logoimg"src={Logo} width="64px"></img></div></Link>
                        <span className="sidenav-trigger hide-on-large-only right" data-target="slide-out"><Icon>menu</Icon></span>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link className="black-text text-darken-3 center-align" to="/">Home</Link></li>
                                <li><Link className="black-text text-darken-3" to="/about">About</Link></li>
                                <li><Link className="black-text text-darken-3" to="/events">Events</Link></li>
                                <li><Link className="black-text text-darken-3"  to="/contact">Contact</Link></li>
                            </ul>
                    </div>
                </nav>
                <ul className="sidenav white" id="slide-out">
                <li><Link className="sidenav-close black-text" to="/">Home</Link></li>
            <li><Link className="sidenav-close black-text " to="/about">About</Link></li>
            <li><Link className="sidenav-close black-text" to="/events">Events</Link></li>
            <li><Link className="sidenav-close black-text" to="/contact">Contact</Link></li>
          
                </ul>
        </div>
        );
    }
}
export default Navbar;