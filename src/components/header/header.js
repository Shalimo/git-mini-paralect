import React from "react";
import Logo from "../../img/git-logo.svg"
// import Glass from "../../img/glass.svg"
import "./header.css";

const Header = () => {
    return (
        <div className="header-container">
            <img className="header-logo" alt="" src={Logo}></img>
            <form className="form-container">
                <input id="logo" type="text" placeholder="Enter GitHub username"></input>
            </form>
        </div>
    )
}

export default Header;