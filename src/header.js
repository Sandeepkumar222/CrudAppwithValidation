import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="mr-auto navbar-nav">
              <li class="nav-item">
                {" "}
                <Link className="navbar-brand" to="/home">
                  <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                    width="45"
                    height="35"
                    className="align-top d-inline-block"
                  />{" "}
                  Crud App
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/posts">
                  Posts
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/aboutuser">
                  About User
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/aboutme">
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Nav variant="tabs" className="topnav">
  
 </Nav> */}
      {/* </Navbar> */}
    </>
  );
};

export default Header;
