import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper white">
          <Link
            to="/"
            style={{ fontFamily: "monospace" }}
            className="col s5 brand-logo center black-text">
              <i className="material-icons">code</i>
              MERN
          </Link>
        </nav>
      </div>
    )
  }
}

export default Navbar;