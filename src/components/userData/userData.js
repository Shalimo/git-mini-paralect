import React from "react";
import './userData.css';
// import Avatar from "../../img/avatar.svg";
import Followers from "../../img/followers.svg";
import Following from "../../img/following.svg";

const UserData = ({userInfo}) => {
    return (
        <div className="data-container">
            <img className="avatar" alt="" src={userInfo.avatar}></img>
            <h1 className="username">{userInfo.name}</h1>
            <a href={userInfo.url} className="userlink">{userInfo.url}</a>
            <div className="follow-container">
                <div className="followers">
                    <img className="icon" src={Followers} alt=""></img>
                    {userInfo.followers} followers
                </div>
                <div className="following">
                    <img className="icon" src={Following} alt=""></img>
                    {userInfo.following} following
                </div>
            </div>
        </div>
    )
}

export default UserData;