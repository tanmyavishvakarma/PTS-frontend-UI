import logo from './logo.svg';
import './App.css';
import Navbar from './components/dashboard/Navbar.js'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { Component } from 'react';
import Home from './components/dashboard/Home'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path ="/"component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
