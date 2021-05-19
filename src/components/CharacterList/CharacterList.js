import React from "react";
import "./CharacterList.scss";
import { useSelector } from "react-redux";
import CharacterProfile from "../CharacterProfile/CharacterProfile.js";

function CharacterList() {
  const globalState = useSelector((state) => state.characters);
  const { characters } = globalState;

  return (
    <div className="list-container">
      {characters != null &&
        characters.map((item, index) => {
          return <CharacterProfile character={item} key={index} />;
        })}
    </div>
  );
}

export default CharacterList;
