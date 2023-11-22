import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                    <img src="/images/parkEaselogo.png" alt="ParkEase Logo" height="80" /> {/* Adjust logo size */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"> {/* Increase font size */}
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item fs-5"> {/* Increase font size */}
                            <a className="nav-link active" aria-current="page" href="/about">About Us</a>
                        </li>
                        <li className="nav-item fs-5"> {/* Increase font size */}
                            <a className="nav-link active" aria-current="page" href="/contact">Contact Us</a>
                        </li>
                        {/* Add more nav items here */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
