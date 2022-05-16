import React, { useEffect, useState } from "react";
import UserData from "../userData/userData";

const User = () => {

    const [userInfo, setUserInfo] = useState({});

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
        fetch('https://api.github.com/users/Shalimo')
            .then(data => data.json())
            .then(data => {
                infoAboutUser(data)
            })
    })
    return (
        <UserData userInfo = {userInfo}/>
    )
}

export default User;