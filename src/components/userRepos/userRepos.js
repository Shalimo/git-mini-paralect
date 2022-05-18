import React from "react";
import "./userRepos.css";
import NotFound from "../../img/repos-not-found.svg"

const UserRepos = ({reposInfo}) => {

    if (reposInfo.length === 0) {
        return (
            <div className='empty-container'>
                <img alt='' src={NotFound}></img>
                <p>Repository list is empty</p>
            </div>
        )
    }

    return reposInfo.map((repo) => {
        return (
            <div key={repo.name} className="repos-container">
                <a href="#" className="repos-name">{repo.name}</a>
                <div className="repos-description">{repo.description}</div>
            </div>
        )
    }) 

}

export default UserRepos;