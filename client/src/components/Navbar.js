import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
    let user = null;

    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }

    // Safe parsing of 'currentUser' from localStorage
    try {
        const userStr = localStorage.getItem('currentUser');
        if (userStr) {
            user = JSON.parse(userStr);
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        user = null; // Ensure user is null if parsing fails
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* Corrected the className to "fa-solid fa-bars" */}
                    <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{ color: 'white' }}></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-5">
                        {user ? (
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-user"></i> {user.name}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="/profile" >Profile</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>

                                </ul>
                            </div>

                        ) : (
                            <>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>


            </nav>
        </div>
    );
}

export default Navbar;