import React,{ Component } from "react";
import Navbar from './components/layout/Navbar'; // exported from navbar class
import UserItem from './components/users/UserItem';
import './App.css';

class App  extends Component{

  render() { // render is a method within a class life cycle method and runs at a certain point when the components are loaded and then it renders
//const numbers= [1,2,3];

  return (
    <div className = 'App'>
     <Navbar/>   {/* nav bar props get passed here or they can be overwritten here if you type directly in the navbar */}
     <UserItem />
    </div>
  );
}
}

export default App;
