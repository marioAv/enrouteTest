import React, { useEffect } from "react";
import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../helper/characters";
import { setCharacters, setPageOptions } from "../../redux/characters";
import CharacterList from "../CharacterList/CharacterList.js";
import Pagination from "../Pagination/Pagination";
import SearchInput from "../SearchInput/SearchInput";

function Home() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.characters);
  const { currentPage } = globalState;

  useEffect(() => {
    getCharactersHandler();
  }, [currentPage]);

  const getCharactersHandler = () => {
    getCharacters(currentPage).then((res) => {
      const { results, previous, next } = res;
      dispatch(setCharacters(results));
      dispatch(setPageOptions({ previous: previous, next: next }));
    });
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="input-section">
          <SearchInput />
        </div>

        <div className="characters-section">
          <CharacterList />
        </div>

        <div className="pagination-section">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Home;
