import "./Album.css";
function Album(props) {
  const { photoNo, title, albumUser, state, setState, pos } = props;
  const handleDelete = (e) => {
    const index = e.target.dataset.index - 1;
    state.splice(index, 1);
    let newState = [...state];
    fetch(`https://jsonplaceholder.typicode.com/albums/${photoNo}`, {
      method: "DELETE",
    });
    setState(newState);
  };
  return (
    <div className="album">
      <div className="albumdetails">
        <h4>Album User - {albumUser}</h4>
        <h4> PhotoNo - {photoNo} </h4>
        Title - {title}
      </div>
      <div className="btn-ctn">
        <button id="update" data-index={pos}>
          Update
        </button>
        <button id="delete" data-index={pos} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Album;
