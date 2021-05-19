import React, { useEffect, useState } from "react";
import "./SearchInput.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../../redux/characters";
import { searchCharacter, getCharacters } from "../../helper/characters";

function SearchInput() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(null);
  const globalState = useSelector((state) => state.characters);
  const { currentPage } = globalState;

  useEffect(() => {
    if (searchTerm != null) {
      let timer = setTimeout(() => {
        if (searchTerm.length > 0) {
          searchCharacter(searchTerm).then((res) => {
            dispatch(setCharacters(res.results));
          });
        } else {
          getCharacters(currentPage).then((res) => {
            dispatch(setCharacters(res.results));
          });
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search People..."
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
