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

    // const paginate = (pageNumber) => setCurrentPage(pageNumber + 1);
    const paginate = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage + 1);
      }
    
    const nextPage = (countOfPages) => {
        if (currentPage < countOfPages) {
            setCurrentPage(currentPage => currentPage + 1);
        }
    } 
    const prevPage = (countOfPages) => {
        if (currentPage > countOfPages[0]) {
            setCurrentPage(currentPage => currentPage - 1)
        }
    }

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
                setLoading(true);
                setFound(true);
                fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=1`)
                .then(data => {
                    return data.json()
                })
                .then(data => {
                setReposInfo(data)
                setLoading(false);
            })
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
            <div className='not-found-container'>
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
                <Pagination
                reposPerPage={reposPerPage} 
                countRepos={countRepos} 
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                firstRepoIndex={firstRepoIndex}
                lastRepoIndex={lastRepoIndex}
                paginate={paginate}/>
            </div>
        </div>
        
    )
}

export default User;