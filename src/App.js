import React,{ Component } from "react";
import Navbar from './components/layout/Navbar';

import './App.css';

class App  extends Component{

  render() { // render is a method within a class life cycle method and runs at a certain point when the components are loaded and then it renders


  return (
    <div className = 'App'>
     <Navbar title = " Github Finder" icon = 'fab fa-github'  /> 
     
    </div>
  );
}
}

export default App;
