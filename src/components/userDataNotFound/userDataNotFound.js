import React from "react";
import NotFound from "../../img/user-not-found.svg";
import "./userDataNotFound.css"

const UserDataNotFound = () => {
    return (
        <div className='not-found-container'>
            <img alt='' src={NotFound}></img>
            <p>User not found</p>
        </div>
    )
}

export default UserDataNotFound;