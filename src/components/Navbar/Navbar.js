import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="nav">
            <div className="nav-brand">
                <h3>Where in the world?</h3>
            </div>
            <div className="mode">
                <ion-icon className="moon" name="moon-outline"></ion-icon>
                <p>Dark Mode</p>
            </div>
        </div>
    )
}

export default Navbar;