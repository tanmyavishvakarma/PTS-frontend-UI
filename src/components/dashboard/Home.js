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
                <div className="bgimg-holder">
                    <div className="toptext">
                        PLATFORM TECH SOLUTIONS
                    </div>
                    <div className="subtext">
                        Your Imagination, Our Creations
                    </div>
                 
                </div>
              
            </div>
        
        );
    }
}
export default Home;
