import React from "react";

const Navbar = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand m-1" href="#nav">
          NewDrib   
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false" 
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#about">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#contact"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Us
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#projects">
                Contact Information 
              </a>

            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;