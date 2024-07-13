import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo/signature.png";
// import logo from "../assets/logo/isha-logo.png";
import pdf from "../assets/resume.pdf";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-portfolio w-100">
        <div className="container-fluid padding-header w-100">
          <div className="row w-100 align-items-center">
            <div className="col-lg-3 col-4 d-block">
              <Link className="navbar-brand" aria-current="page" to="/home">
                <img
                  src={logo}
                  alt=""
                  className="d-inline-block align-text-top header-logo"
                />
              </Link>
            </div>
            <div className="col-8 d-lg-none d-block">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col-lg-9 col-9 d-block">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={pdf} target="_blank">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
