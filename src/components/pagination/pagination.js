import React from "react";
import "./pagination.css"

const Pagination = ({reposPerPage, countRepos, paginate, currentPage}) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const activeToggle = (num) => num === currentPage ? "active" : "page-link" 

    return (
        <ul className="pagination">
            {
                pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a href="#" className={activeToggle(num)} onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination;