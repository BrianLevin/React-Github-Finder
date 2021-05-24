import React from "react";
import PropTypes from "prop-types"; // declare prop types prop checiking
import{ Link } from 'react-router-dom';

// destructured icon and title

const Navbar = ({ icon, title }) => {
  return (
    <nav className="  navbar bg-primary">
      <h1>
        {" "}
        <i className={icon} /> {title} {/* render the props  */}
      </h1>
      <ul>
        <li><Link to ='/'>Home</Link>
        </li>
        <li>
<Link to = '/about'>About</Link>

        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  /* pass default  props in object  */ title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  // prop checking
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
