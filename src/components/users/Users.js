import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} /> // used key to break organize code more efficently and prevent warnings in the console
        ))}
        
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",

  gridGap: "1rem",
};

export default Users;
