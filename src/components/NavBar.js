import React from "react";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import "./style.scss";
const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded align-items-center">
        <button
          className="navbar-toggler toggle navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMobile"
          aria-controls="navbarMobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav-left">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>

        <a className="navbar-brand mx-auto" href="#">
          <h5 id="logo" className="text-uppercase">
            global shop
          </h5>
        </a>
        <div className="cart-container">
          <div className="count-container d-flex align-items-center justify-content-center">
            <span className="count">0</span>
          </div>

          <IconContext.Provider value={{ size: "1.3em" }}>
            <FaShoppingCart />
          </IconContext.Provider>
        </div>

        {/*   
    <!-- Mobile --> */}
        <div className="collapse" id="navbarMobile">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
