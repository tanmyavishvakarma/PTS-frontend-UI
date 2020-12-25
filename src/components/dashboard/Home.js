import React from 'react'
import {Component} from 'react'
import Bgimg from '../assets/back.jpg'
import './home.css'
class Home extends Component{
    render(){
        return (
            <div className="hcontainer">
                <div className="arrow-wapper">
                    <div className="arrow1"></div>
                    <div className="arrow1"></div>
                    <div className="arrow1"></div>
                    <div className="arrow1"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>  
                </div>
                <img src={Bgimg} className="bgimg"></img>
            </div>
        
        );
    }
}
export default Home;
