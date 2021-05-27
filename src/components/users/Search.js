import React, {useState} from 'react';
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClear, clearUsers, setAlert})=> {

  const{text,setText} = useState('');

// onsubmit subts data
const onSubmit = (e) => {

    
    e.preventDefault();
    // alert if user doesnt enter any user names
    if(text === '') {
setAlert('Please enter somthing', 'light');

    } else{
//subbmited button seaches for users
searchUsers(text);
// clears form after search
setText('');
    }
    

}


}


// changes the state
const onChange = (e)  =>{
    setText( e.target.value );
   


        return (
            <div>
            {/* form to seach for user names */}
                <form  onSubmit= {onSubmit} className="form">

<input type = "text " name= "text"  className = "form-control" placeHolder = "Search Users..." value = {text} onChange = {onChange}/>
<input type= "submit" value="Search" className= "btn btn-dark btn-block" />

                </form>
                {/* Boolean which will onyl show once users are displayed.*/}
            {showClear && <button className= "btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

            </div>
        )
    
}


// make sure code is more robust with correct prop types
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search
