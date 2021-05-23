import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Search extends Component {

    // attach state to the input
state= {
    text: ''
}
// make sure code is more robust with correct prop types
static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
}
// onsubmit subts data
onSubmit = (e) => {

    e.preventDefault();
    //subbmited button seaches for users
    this.props.searchUsers(this.state.text);
    // clears form after search
    this.setState( {text: ''});

}
// changes the state
onChange = (e)  =>{
this.setState({[e.target.name]: e.target.value })

}

    render() {
        return (
            <div>
            {/* form to seach for user names */}
                <form  onSubmit= {this.onSubmit} className="form">

<input type = "text " name= "text" placeHolder = "Search Users..." value = {this.state.text} onChange = {this.onChange}/>
<input type= "submit" value="Search" vlassName= "btn btn-dark btn-block" />

                </form>
            {this.props.showClear && <button className= "btn- btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}

            </div>
        )
    }
}

export default Search
