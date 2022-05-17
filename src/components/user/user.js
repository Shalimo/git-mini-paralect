import React, { useEffect, useState } from "react";
import UserData from "../userData/userData";
import UserRepos from "../userRepos/userRepos";
import Spinner from "../../components/spinner/spinner.js"
import NotFound from "../../img/user-not-found.svg"

const User = ({username}) => {

    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(false);

    const infoAboutUser = (data) => {
        setUserInfo({
            login: data.login,
            name: data.name,
            avatar: data.avatar_url,
            followers: data.followers,
            following: data.following,
            url: data.html_url,
            reposUrl: data.repos_url
        })
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(data => {
                if (data.status === 404) {
                    setLoading(false);
                    setFound(false);
                    throw new Error("Error: User not found");
                }
                return data.json();
            })
            .then(data => {
                infoAboutUser(data)
                setLoading(false);
                setFound(true)
            })
    }, [username])

    if (loading) {
        return (
            <Spinner/>
        )
    }

    if (!found) {
        return (
            <div className='main-container'>
                <img alt='' src={NotFound}></img>
                <p>User not found</p>
            </div>
        )
    }

    return (
        <div>
            <UserData userInfo = {userInfo}/>
            <UserRepos/>
        </div>
        
    )
}

export default User;