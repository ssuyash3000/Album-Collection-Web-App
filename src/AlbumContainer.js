import React, { useState, useEffect } from "react";
import Album from "./Album";
import "./AlbumContainer.css";

function AlbumContainer(props) {
  const { state, setState } = props;

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="AlbumContainer">
        {state.map((currAlbum) => (
          <Album
            albumUser={currAlbum.userId}
            photoNo={currAlbum.id}
            title={currAlbum.title}
            key={currAlbum.id}
          />
        ))}
      </div>
    );
  }
}

export default AlbumContainer;
