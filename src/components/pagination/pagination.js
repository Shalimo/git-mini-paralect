import React from "react";
import "./pagination.css"
import Prev from "../../img/prev.svg"
import Next from "../../img/next.svg"

const Pagination = ({reposPerPage, countRepos, paginate, currentPage, nextPage, prevPage}) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const activeToggle = (num) => num === currentPage ? "active" : "page-link" 

    return (
        <div>
        <ul className="pagination">
            <div className="page-item" onClick={() => prevPage(pageNumbers)}><img className="prev" alt="" src={Prev}></img></div>
            {
                pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a href="#" className={activeToggle(num)} onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))
            }
            <div className="page-item" onClick={() => nextPage(pageNumbers.length)}><img className="next" alt="" src={Next}></img></div>
        </ul>
        </div>
    )
}

export default Pagination;