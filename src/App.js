import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar"; // exported from navbar class
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import User from "./components/users/User";
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import Alert from "./components/layout/Alert";
import "./App.css";
import About from './components/pages/About'

class App extends Component {
  // put res.data users that come back into state
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
    
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
// get a single Github User

getUser =  async (username) => {

  this.setState({loading: true})
  // user will get gitgubs and not run out of requests because of github client and secret
const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
// get the data from  one user at a time when it searches
this.setState({ user: res.data, loading: false });  
}

// Get users Repos
getUserRepos =  async (username) => {

  this.setState({loading: true})
  // user will get gitgubs and not run out of requests because of github client and secret
const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
// get the data from  one user at a time when it searches
this.setState({ repos: res.data, loading: false });  
}

// clear users from state ???

clearUsers = () => this.setState({users: [], loading: false });

// set Alert

setAlert =  (msg, type) => {
this.setState( {alert: {msg, type}});

setTimeout(()=> this.setState({alert:null}), 5000)
}

  render() {
// destricured property
    const{users, user,  repos, loading } = this.state;
    // render is a method within a class life cycle method and runs at a certain point when the components are loaded and then it renders
    //const numbers= [1,2,3];

    return (
      <Router>
      <div className="App">
        <Navbar />

        <div className="container">
        <Alert alert = {this.state.alert} />
          {/*sending a prop up instead of down from search users this gets rendered */}
          <Switch>
            <Route  exact path =  '/' render ={props =>(
              <Fragment>
                 <Search searchUsers= {this.searchUsers} clearUsers= {this.clearUsers} showClear={users.length > 0 ? true: false} setAlert= {this.setAlert}/>
          {/*  passed down users  state components to props */}
          <Users loading={loading} users= {users} />
              </Fragment>
            )}  />
            <Route  exact path = '/about' component ={About} />
            <Route  exact path = '/user/:login' render ={props =>(
              <User {...props } getUser={this.getUser}  getUserRepos={this.getUserRepos} user ={user}  repos= {repos} loading ={loading}/>
            )} />
          </Switch>
       
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
