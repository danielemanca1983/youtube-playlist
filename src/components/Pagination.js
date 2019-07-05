import React from 'react';

const Pagination = ({ videosPerPage, totalVideos, paginate }) => {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(videosPerPage, totalVideos);
  return(
    <nav>
      <ul className="youtube__playlist__pagination">
        {pageNumbers.map(number => (
          <li key={number} className="youtube__playlist__pagination__item">
            <a onClick={() => paginate(number)} href="!#" className="youtube__playlist__pagination__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;