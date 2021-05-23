import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"; // exported from navbar class
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  // put res.data users that come back into state
  state = {
    users: [],
    loading: false,
  };

  //life cycle method get users data with a promose
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    //loading
    // this.setState({ loading: true });
    //                                               // user will get gitgubs and not run out of requests because of github client and secret
    // const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // // get the data from user, then set loading back to false
    // this.setState({ users: res.data,items, loading: false });
// function that calls search users

// search github users
    searchUsers= async text => {
this.setState({loading: true})
                                               // user will get gitgubs and not run out of requests because of github client and secret
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // get the data from  one user at a time when it searches
    this.setState({ users: res.data.items, loading: false });
      
    }
  //}
// clear users from state ???

clearUsers = () => this.setState({users: [], loading: false });

  render() {
    // render is a method within a class life cycle method and runs at a certain point when the components are loaded and then it renders
    //const numbers= [1,2,3];

    return (
      <div className="App">
        <Navbar />

        <div className="container">
          {/*sending a prop up instead of down from search users this gets rendered */}
        <Search searchUsers= {this.searchUsers} clearUsers= {this.clearUsers} showClear={this.state.users.length > 0 ? true: false}/>
          {/*  passed down users  state components to props */}
          <Users loading={this.state.loading} users= {this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
