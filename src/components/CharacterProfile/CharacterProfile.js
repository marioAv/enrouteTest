import React from "react";
import "./CharacterProfile.scss";

function CharacterProfile(props) {
  const { character } = props;

  return (
    <div className="character-container">
      <div className="grid-item">
        <h1>{character.name}</h1>
      </div>
    </div>
  );
}

export default CharacterProfile;
