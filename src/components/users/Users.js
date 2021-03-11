import React, { Component } from 'react'

export class Users extends Component {
state= {
users: [ {
    id: '1',
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
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
    html_url: 'https://github.com/mojombo'




}


]


}

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div>{user.login}</div>
                ))} {/*  a high order array method that takes in a function and will use a call a call back function */}
            </div>
        )
    }
}

export default Users
