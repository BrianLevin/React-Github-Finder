import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar"; // exported from navbar class
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import User from "./components/users/User";
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import Alert from "./components/layout/Alert";
import "./App.css";
import About from './components/pages/About'
const App = () =>  {

const {users, setUsers} = useState({});
const {user, setUser} = useState({});
const {repos, setRepos} = useState({});
const {loading, setLoading} = useState(false);
const {alert, setAlert} = useState(null);

  

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
   const  searchUsers= async text => {
setLoading(true);
                                               // user will get gitgubs and not run out of requests because of github client and secret
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   setUsers(res.data.items);
   setLoading(false);
      
    }
  //}
// get a single Github User

const getUser =  async (username) => {
setLoading(true);
  // user will get gitgubs and not run out of requests because of github client and secret
const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
setUser(res.data);
// get the data from  one user at a time when it searches
setLoading(false); 
}

// Get users Repos
const getUserRepos =  async (username) => {

  setLoading(true);
  // user will get gitgubs and not run out of requests because of github client and secret
const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

setRepos(res.data);
// get the data from  one user at a time when it searches
setLoading(false);
}
// clear users from state ???

const clearUsers = () => {
  setUsers([]);
  // get the data from  one user at a time when it searches
  setLoading(false);
  }


// set Alert

const showAlert =  (msg, type) => {

setAlert( {msg, type})
setTimeout(()=> setAlert(null), 5000)
}

  

    // render is a method within a class life cycle method and runs at a certain point when the components are loaded and then it renders
    //const numbers= [1,2,3];
  
    return ( 
      <Router>
      <div className="App">
        <Navbar />

        <div className="container">
        <Alert alert = {alert} />
          {/*sending a prop up instead of down from search users this gets rendered */}
          <Switch>
            <Route  exact path =  '/' render ={props =>(
              <Fragment>
                 <Search searchUsers= {searchUsers} clearUsers= {clearUsers} showClear={users.length > 0 ? true: false} setAlert= {showAlert}/>
          {/*  passed down users  state components to props */}
          <Users loading={loading} users= {users} />
              </Fragment>
            )}  />
            <Route  exact path = '/about' component ={About} />
            <Route  exact path = '/user/:login' render ={props =>(
              <User {...props } getUser={getUser}  getUserRepos={getUserRepos} user ={user}  repos= {repos} loading ={loading}/>
            )} />
          </Switch>
       
        </div>
      </div>
      </Router>
    );
  
            
            }

export default App;
