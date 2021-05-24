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
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
// onsubmit subts data
onSubmit = (e) => {

    
    e.preventDefault();
    // alert if user doesnt enter any user names
    if(this.state.text === '') {
this.props.setAlert('Please enter somthing', 'light');

    } else{
//subbmited button seaches for users
this.props.searchUsers(this.state.text);
// clears form after search
this.setState( {text: ''});
    }
    

}
// changes the state
onChange = (e)  =>{
this.setState({[e.target.name]: e.target.value })

}



    render() {

// desstructured property
const {showClear, clearUsers} = this.props

        return (
            <div>
            {/* form to seach for user names */}
                <form  onSubmit= {this.onSubmit} className="form">

<input type = "text " name= "text"  className = "form-control" placeHolder = "Search Users..." value = {this.state.text} onChange = {this.onChange}/>
<input type= "submit" value="Search" className= "btn btn-dark btn-block" />

                </form>
                {/* Boolean which will onyl show once users are displayed.*/}
            {showClear && <button className= "btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

            </div>
        )
    }
}

export default Search
