import React, { Component } from 'react'

   class UserItem extends Component {

    state  = { // state is just a javascript object
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/mojombo'

    };

/*
    constructor () { // adding state to a class based component using a constructor function thats going to run when the component runs
        super();// call super in order to call the parent class constructor

        this.state  = { // state is just a javascript object
         id: 'id',
         login: 'mojombo',
         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
         html_url: 'https://github.com/mojombo'




        }
    }
    */


    render() {

const {login, avatar_url, html_url } = this.state // destructored this.state to pull value  out of the object

        return  (
            <div className = "card text-center">
            <img src = {this.state.avatar_url}  alt= "" className = "round-img" style= {{width: '60px'}} />   {/*  grab somthing from state within a class also included some  globall css class and added inline style */}
            <h3>{login}</h3> {/* shows login name */}
            <div>
            <a href = {html_url} className= "btn btn-dark btn-sm my-1"> More
            
            </a> {/* button to click to get to url */}
            </div>
            </div>
        
        );
    }
}

export default UserItem
