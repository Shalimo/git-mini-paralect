import React from "react";

const Pagination = ({reposPerPage, countRepos, paginate}) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {
                pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a href="#" className="page-link" onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination;