import React from "react";

const UserItem= (props)=> {

  
    const { login, avatar_url, html_url } = props.user; // destructored this.props.user to hget values

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />{" "}
        {/*  grab somthing from state within a class also included some  globall css class and added inline style */}
        <h3>{login}</h3> {/* shows login name */}
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            {" "}
            More
          </a>{" "}
          {/* button to click to get to url */}
        </div>
      </div>
    );
  
}

export default UserItem;
