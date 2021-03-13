import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
    if(loading) {

return <Spinner />
    } else {

        return (
            <div style={userStyle}>
              {users.map(user => (
                <UserItem key={user.id} user={user} /> // used key to break organize code more efficently and prevent warnings in the console
              ))}
              
            </div>
          );
    }
  
}

Users.propTypes = {
users: PropTypes.array.isRequired,
loading: PropTypes.bool.isRequired

}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",

  gridGap: "1rem",
};

export default Users;
