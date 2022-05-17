import React from "react";
import "./userRepos.css";

const UserRepos = ({reposInfo}) => {
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