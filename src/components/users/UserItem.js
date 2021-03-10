import React, { Component } from 'react'

   class UserItem extends Component {

    constructor () { // adding state to a class based component using a constructor function thats going to run when the component runs
        super();// call super in order to call the parent class constructor

        this.state  = { // state is just a javascript object
         id: 'id',
         login: 'mojombo',
         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
         html_url: 'https://github.com/mojombo'




        }
    }
    render() {
        return  (
            <div className = "card text-center">
            <img src = {this.state.avatar_url}  alt= "" className = "round-img" style= {{width: '60px'}} />   {/*  grab somthing from state within a class also included some  globall css class and added inline style */}
            <h3>{this.state.login}</h3>
            <div>
            <a href = {this.state.html_url} className= "btn btn-dark btn-sm my-1"> More
            
            </a>
            </div>
            </div>
        
        );
    }
}

export default UserItem
