import Album from "./Album";
import "./AlbumContainer.css";

function AlbumContainer(props) {
  const { state, setState } = props;

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="AlbumContainer">
        {state.map((currAlbum, index) => (
          <Album
            state={state}
            setState={setState}
            albumUser={currAlbum.userId}
            photoNo={currAlbum.id}
            pos={index + 1}
            title={currAlbum.title}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default AlbumContainer;
