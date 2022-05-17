import React from "react";
import "./userRepos.css";

const UserRepos = ({reposInfo}) => {
    return (
        <div>
            <div key="" className="repos-container">
                <a href="#" className="repos-name">{reposInfo.name}</a>
                <div className="repos-description">{reposInfo.description}</div>
             </div>
             <div key="" className="repos-container">
                <a href="#" className="repos-name">react-hot-loader</a>
                <div className="repos-description">Personal blog</div>
             </div>
             <div key="" className="repos-container">
                <a href="#" className="repos-name">react-hot-loader</a>
                <div className="repos-description">Personal blog</div>
             </div>
             <div key="" className="repos-container">
                <a href="#" className="repos-name">react-hot-loader</a>
                <div className="repos-description">Personal blog</div>
             </div>
        </div>
    )
}

export default UserRepos;