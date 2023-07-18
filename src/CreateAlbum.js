import "./CreateAlbum.css";
function CreateAlbum(porps) {
  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form className="form-field">
        <label>User Id - </label>
        <input type="text" placeholder="Enter userId" />
        <label>Photo No - </label>
        <input type="text" placeholder="Enter Photo No." />
        <label>Title - </label>
        <input type="text" placeholder="Enter Title" />
        <div className="btn-container">
          <button className="create-post-btn">Create Album</button>
        </div>
      </form>
    </div>
  );
}
export default CreateAlbum;
