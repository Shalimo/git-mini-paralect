import React, {useState} from "react";
import Logo from "../../img/git-logo.svg"
import "./header.css";

const Header = ({onInputChange}) => {
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onInputChange(username);
    }
    return (
        <div className="header-container">
            <img className="header-logo" alt="" src={Logo}></img>
            <form className="form-container" onSubmit={onSubmit}>
                <input id="logo" autoComplete="off" type="text" placeholder="Enter GitHub username" onChange={e => setUsername(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Header;