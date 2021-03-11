import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
state= {
users: [ {
    id: '1',
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
   



},

{
    id: '2',
    login: 'defunkt',
    avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
    html_url: 'https://github.com/defunkt'




},

{
    id: '3',
    login: 'pjhyett',
    avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
    html_url: 'https://github.com/pjhyett'




}


]


};

    render() {
        return (
            <div>
                {this.state.users.map(user => (   // pass in the whole user for all object values then pass as prop to user item
                    <UserItem key= {user.id} user={user}/>  // used key to break organize code more efficently and prevent warnings in the console
                ))} {/*  a high order array method that takes in a function and will use a call a call back function to get data */}
            </div>
        )
    }
}

export default Users
