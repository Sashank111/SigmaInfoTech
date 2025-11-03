import { NavLink } from 'react-router-dom';
import logo from'./logo.png';
import React from 'react'
import headerstyles from './Header.module.css';
const Header = () => {
  return (
    <header className={headerstyles.headers}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
         <img src={logo} alt="Sigma Infotec Logo" style={{ height: "70px", width: "auto", marginRight: "8px" }}/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookservice">Book service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Offers">Offers</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;