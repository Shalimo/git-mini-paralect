import React from "react";
import './userData.css';
import Avatar from "../../img/avatar.svg";
import Followers from "../../img/followers.svg";
import Following from "../../img/following.svg";

const UserData = () => {
    return (
        <div className="data-container">
            <img className="avatar" alt="" src={Avatar}></img>
            <h1 className="username">Dan Abramov</h1>
            <a href="#" className="userlink">gaearon</a>
            <div className="follow-container">
                <div className="followers">
                    <img className="icon" src={Followers} alt=""></img>
                    65.8k followers
                </div>
                <div className="following">
                    <img className="icon" src={Following} alt=""></img>
                    171 following
                </div>
            </div>
        </div>
    )
}

export default UserData;