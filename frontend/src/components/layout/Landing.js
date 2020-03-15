import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Build</b> a login app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span>
              stack from scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              create a (minimal) full stack app with user auth via passport and JWTs
            </p>
            <div className="col s12">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waver-light hoverable blue accent-3"
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;