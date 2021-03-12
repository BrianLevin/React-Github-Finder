import React from 'react';
import PropTypes from 'prop-types'; // declare prop types prop checiking




const Navbar=(props) => {




    
    
        return (
            <nav className= "  navbar bg-primary">
                <h1> <i className= {props.icon} /> {props.title} {/* render the props  */}
               
               </h1>
            </nav>
        )
}

Navbar.defaultProps = {  /* pass default  props in object  */
    title: 'Github Finder',
    icon: 'fab fa-github'
    
        }
    
        Navbar.propTypes = { // prop checking
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
        };

export default Navbar
