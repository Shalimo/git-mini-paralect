import React, { useEffect, useState } from "react";
import UserData from "../userData/userData";
import Spinner from "../../components/spinner/spinner.js"

const User = ({username}) => {

    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);

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
        // setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(data => data.json())
            .then(data => {
                infoAboutUser(data)
            })
    }, [username])

    if (loading) {
        return (
            <Spinner/>
        )
    }

    return (
        <div>
            <UserData userInfo = {userInfo}/>
        </div>
        
    )
}

export default User;