import React from "react";
import './userData.css';
// import Avatar from "../../img/avatar.svg";
import Followers from "../../img/followers.svg";
import Following from "../../img/following.svg";

const UserData = ({userInfo}) => {

    const checkNum = (num) => {
        if (userInfo.followers >= 1000 || userInfo.Following >= 1000) {
            return `${parseFloat((num/1000).toFixed(1))}k` 
        } else {
            return num
        }
    }

    return (
        <div className="data-container">
            <img className="avatar" alt="" src={userInfo.avatar}></img>
            <h1 className="username">{userInfo.name}</h1>
            <a href={userInfo.url} className="userlink">{userInfo.login}</a>
            <div className="follow-container">
                <div className="followers">
                    <img className="icon" src={Followers} alt=""></img>
                    {checkNum(userInfo.followers)} followers
                </div>
                <div className="following">
                    <img className="icon" src={Following} alt=""></img>
                    {checkNum(userInfo.following)} following
                </div>
            </div>
        </div>
    )
}

export default UserData;