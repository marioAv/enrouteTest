import React from "react";
import "./Pagination.scss";
import { useSelector, useDispatch } from "react-redux";
import { prevCurrentPage, nextCurrentPage } from "../../redux/characters";

function Pagination() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.characters);
  const { currentPage, pageOptions } = globalState;

  const nextPage = () => {
    if (pageOptions.next) {
      dispatch(nextCurrentPage());
    }
  };
  const prevPage = () => {
    dispatch(prevCurrentPage());
  };

  return (
    <div>
      <div className="button-container">
        <a onClick={prevPage} className={!pageOptions?.previous && "disabled"}>
          PREV
        </a>
        <a onClick={nextPage} className={!pageOptions?.next && "disabled"}>
          NEXT
        </a>
      </div>

      <div className="page-number-container">
        <h1>PAGE {currentPage}</h1>
      </div>
    </div>
  );
}

export default Pagination;
