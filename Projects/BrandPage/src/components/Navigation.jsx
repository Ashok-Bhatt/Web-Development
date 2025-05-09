"use strict";
import "./navigation.css";

const Navigation = () => {
    return (
        <nav>
            <div className="brand-logo">
                <img src="/images/nike_logo.png" />
            </div>
            <ul>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Location</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <div id="login-button-container">
                <button id="login-button">Login</button>
            </div>
        </nav>
    );
};

export default Navigation;