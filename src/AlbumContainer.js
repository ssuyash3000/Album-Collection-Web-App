import React, { useState, useEffect } from "react";
import Album from "./Album";
import "./AlbumContainer.css";

function AlbumContainer() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const jsonData = await response.json();
        setState(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
