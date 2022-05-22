import React from 'react'
import ReactPaginate from 'react-paginate'
import "./pagination.css"

const Pagination = ({ reposPerPage, countRepos, paginate, firstRepoIndex, lastRepoIndex, currentPage}) => {
    const items = `${firstRepoIndex + 1} - ${lastRepoIndex}`;
    if (countRepos === 0) {
                return (
                    <></>
                )
            }
	return (
            <div className='pagination-container'>
                <div className="pagination-item">{items} of {countRepos} items</div>
                    <ReactPaginate
                        previousLabel={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41436 6.00008L7.70726 1.70718L6.29304 0.292969L0.585938 6.00008L6.29304 11.7072L7.70726 10.293L3.41436 6.00008Z" fill="#0064EB"/>
                        </svg>}
                        breakLabel="..."
                        nextLabel={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#808080" strokeWidth="2"/>
                        </svg>
                        }
                        onPageChange={paginate}
                        pageRangeDisplayed={2}
                        pageCount={countRepos / reposPerPage}
                        renderOnZeroPageCount={null}
                        marginPagesDisplayed={1}
                        activeClassName="active"
                        previousClassName="page-item prev"
                        nextClassName="page-item next"
                        containerClassName="pagination"
                        pageClassName="page-item"
                        breakClassName="page-item"
                        pageLinkClassName="page-link"
                    />
            </div>
	)
}

export default Pagination;



// Без react-paginate, не реализовано только многоточие:

// import React, {useState, useEffect} from "react";
// import "./pagination.css"
// import Prev from "../../img/prev.svg"
// import Next from "../../img/next.svg"

// const Pagination = ({reposPerPage, countRepos, paginate, currentPage, nextPage, prevPage, firstRepoIndex, lastRepoIndex}) => {
    
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(countRepos / reposPerPage); i++) {  
//             pageNumbers.push(i);
//     }
    
//     const activeToggle = (num) => num === currentPage ? "active" : "page-link";
//     const items = `${firstRepoIndex + 1} - ${lastRepoIndex}`;

//     if (countRepos === 0) {
//         return (
//             <></>
//         )
//     }

//     return (
//         <div>
//         <ul className="pagination">
//             <div className="page-item">{items} of {countRepos} items</div>
//             <div className="page-item" onClick={() => prevPage(pageNumbers)}><img className="prev" alt="" src={Prev}></img></div>
//             {
//                 pageNumbers.map(num => {
//                     return (<li className="page-item" key={num}>
//                     <a href="#" className={activeToggle(num)} onClick={() => paginate(num)}>
//                         {num}
//                     </a>
//                 </li>)   
//                 })
//             }
//             <div className="page-item" onClick={() => nextPage(pageNumbers.length)}><img className="next" alt="" src={Next}></img></div>
//         </ul>
//         </div>
//     )
// }

// export default Pagination;

