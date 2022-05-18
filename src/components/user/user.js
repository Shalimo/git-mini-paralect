import React, { useEffect, useState } from "react";
import UserData from "../userData/userData";
import UserRepos from "../userRepos/userRepos";
import Pagination from "../pagination/pagination";
import Spinner from "../../components/spinner/spinner.js"
import NotFound from "../../img/user-not-found.svg"
import "./user.css";

const User = ({username}) => {

    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(false);
    const [reposInfo, setReposInfo] = useState([]);
    const [countRepos, setCountRepos] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(4);

    // для определния текущей страницы
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const currentRepoIndex = reposInfo.slice(firstRepoIndex, lastRepoIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=1`)
            .then(data => data.json())
            .then(data => {
                setReposInfo(data)
                console.log(data)
            })
    }, [username])

    useEffect(() => {
        setCountRepos(reposInfo.length)
    }, [reposInfo])

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
        <div className="user-container">
            <UserData userInfo = {userInfo}/>
            <div className="repos">
                <h1>Repositories ({countRepos})</h1>
                <UserRepos reposInfo = {currentRepoIndex}/>
                <Pagination reposPerPage={reposPerPage} countRepos={countRepos} paginate={paginate} currentPage={currentPage}/>
            </div>
        </div>
        
    )
}

export default User;