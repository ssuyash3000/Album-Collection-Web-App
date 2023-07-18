import "./Album.css";
function Album(props) {
  const { photoNo, title, albumUser } = props;
  return (
    <div className="album">
      <div className="albumdetails">
        <h4>Album User - {albumUser}</h4>
        <h4> PhotoNo - {photoNo} </h4>
        Title - {title}
      </div>
      <div className="btn-ctn">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default Album;
