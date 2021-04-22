import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link class="navbar-brand" to="/">
                        Trivia Website
                    </Link>

                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);