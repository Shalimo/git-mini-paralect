import React from "react";
import NotFound from "../../img/repos-not-found.svg"
import "./userReposNotFound.css";

const UserReposNotFound = () => {
    return (
        <div className='empty-container'>
            <img alt='' src={NotFound}></img>
            <p>Repository list is empty</p>
        </div>
    )
}

export default UserReposNotFound;