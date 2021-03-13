import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"; // exported from navbar class
import Users from "./components/users/Users";
import axios from 'axios';
import "./App.css";

class App extends Component {
// put res.data users that come back into state
  state = {

users: [],
loading: false


  }

  //life cycle method get users data with a promose
   async componentDidMount(){
     //loading
this.setState({loading: true});



     const res= await axios.get('https://api.github.com/users')
  // get the data from user, then set loading back to false
this.setState({ user: res.data,loading: false });

  console.log(res.data);

  }


  render() {

    // render is a method within a class life cycle method and runs at a certain point when the components are loaded and then it renders
    //const numbers= [1,2,3];

    return (
      <div className="App">
        <Navbar />

        <div className = "container">

        {/*  passed down users  state components to props */}
        <Users  loading= {this.state.loading} users= {this.state.users}/>
        </div>
        {/* nav bar props get passed here or they can be overwritten here if you type directly in the navbar */}
        
      </div>
    );
  }
}

export default App;
