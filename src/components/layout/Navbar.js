import React, { Component } from 'react';
import PropTypes from 'prop-types'; // declare prop types prop checiking




export class Navbar extends Component {

static defaultProps = {  /* pass default  props in object  */
title: 'Github Finder',
icon: 'fab fa-github'

    }

    static propTypes = { // prop checking
title: PropTypes.string.isRequired,
icon: PropTypes.string.isRequired


    }
    render() {
        return (
            <nav className= "  navbar bg-primary">
                <h1> <i className= {this.props.icon} /> {this.props.title} {/* render the props  */}
               
               </h1>
            </nav>
        )
    }
}

export default Navbar
