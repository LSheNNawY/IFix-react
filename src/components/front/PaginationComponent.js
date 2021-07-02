import React, { useEffect, useState } from "react";
import "../../assets/front/css/pagination.css";


function PaginationComponent({ pageNumber, totalPages, setPageNumber }) {
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  const prevPage = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };
  const nextPage = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination jobsPaginate pagination-template d-flex justify-content-center mb-4">
        <li className={`page-item  ${pageNumber === 0 ? "disabled" : ""}`}>
          <a href="" className={`page-link`} onClick={(e) => prevPage(e)}>
            <i className="fas fa-angle-left"></i>
          </a>
        </li>

        {pages.map((pageIndex) => (
          <li className="page-item" key={pageIndex}>
            <a
              href=""
              className={`page-link ${
                pageNumber === pageIndex ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setPageNumber(pageIndex);
              }}
            >
              {pageIndex + 1}
            </a>
          </li>
        ))}

        <li
          className={`page-item  ${
            pageNumber >= totalPages - 1 ? "disabled" : ""
          }`}
        >
          <a href="" className="page-link" onClick={(e) => nextPage(e)}>
            <i className="fas fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationComponent;
