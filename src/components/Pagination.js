import React from "react";
import '../styles/index.css'

// receive user's action
const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    //calculate total pages
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        //display the pagination action for user to select
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    // display only the nearest 3 pages
                    page - currentPage <= 3 && currentPage - index <= 3 ?
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? "active" : ""}>
                            {page}
                        </button>
                        : null
                );
            })}
        </div>
    );
};

export default Pagination;