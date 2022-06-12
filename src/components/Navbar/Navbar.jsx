import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4 navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 fw-bold">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
              button[aria-expanded="false"] > .close{
                display: none;
              }
              button[aria-expanded="true"] > .open{
                display: none;
              }
            `}
          </style>

          <span className="fas fa-bars open text-dark fw-bold"></span>
          <span className="fas fa-times close text-dark fw-bold"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link">
              Personagens
            </NavLink>

            <NavLink to="/episodes" className="nav-link">
              Episódios
            </NavLink>

            <NavLink to="/location" className="nav-link">
              Localização
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
