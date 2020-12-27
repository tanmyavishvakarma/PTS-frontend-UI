import React from 'react'
import {Component} from 'react'
import Bgimg from '../assets/back.jpg'
import './home.css'
import Particles from 'react-particles-js';


class Home extends Component{
    
    render(){
        return (
            <div className="hcontainer">
                <div className="text-wrapper">
                    <div className="scale-in-center" id="welcome">
                        Your Imagination, Our Creation
                    </div>
                    <div className="scale-in-center" id="welcome2">
                    PLATFORM TECH SOLUTION
                    </div>
              
              
                </div>
                
               <Particles id="particles-js"
               
                 params={{
                      particles: {
                          number: {
                              value: 90,
                              density: {
                                  enable: true,
                                  value_area: 700
                              }
                          },
                          color: {
                              value: '#fff'
                          },
                          opacity: {
                              value: 1,
                              random:true,
                              anim: {
                                  enable: true
                              }
                          },
                          size: {
                              value: 4,
                              random: true,
                              anim: {
                                  enable: true,
                                  speed: 3
                              }
                          },
                          line_linked: {
                              enable: true
                          },
                          move: {
                              speed: 5
                          }
                      },
          
                  }}
                  
             
                  
                />


            <footer></footer>
            </div>
        
        );
    }
}
export default Home;
