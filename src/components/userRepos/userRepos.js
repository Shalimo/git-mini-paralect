import React from "react";
import "./userRepos.css";
import UserReposNotFound from "../userReposNotFound/userReposNotFound";

const UserRepos = ({reposInfo}) => {

    if (reposInfo.length === 0) {
        return (
            <UserReposNotFound/>
        )
    }

    return reposInfo.map((repo) => {
        return (
            <div key={repo.name} className="repos-container">
                <a target="_blank" href={repo.html_url} className="repos-name">{repo.name}</a>
                <div className="repos-description">{repo.description ? repo.description : "There is no description for this repository"}</div>
            </div>
        )
    }) 
}

export default UserRepos;