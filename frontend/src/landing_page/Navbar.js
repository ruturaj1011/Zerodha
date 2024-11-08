import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-white border-bottom px-5">
      <div class="container-fluid pt-1 pb-2 px-3">

        <Link class="navbar-brand" to="/">
          <img
            className="zerodha-logo"
            src="media/images/logo.svg"
            alt="logo"
          ></img>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/products">Products</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/support">Support</Link>
            </li>

          </ul>
          
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
