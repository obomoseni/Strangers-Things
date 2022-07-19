import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div id="navbar">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/logout">Logout</Link>
        </div>
    )
}


export default Navbar;