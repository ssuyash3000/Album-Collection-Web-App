import { useState } from "react";
import "./CreateAlbum.css";
function CreateAlbum(props) {
  let [userId, setUserId] = useState("");
  let [photoNo, setPhotoNo] = useState("");
  let [title, setTitle] = useState("");
  let { state, setState } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const currAlbum = {
      userId: userId,
      id: photoNo,
      title: title,
    };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(currAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    state.unshift(currAlbum);
    setState(state);
    setUserId("");
    setPhotoNo("");
    setTitle("");
  };
  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form className="form-field" onSubmit={handleSubmit}>
        <label>User Id - </label>
        <input
          type="text"
          placeholder="Enter userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label>Photo No - </label>
        <input
          type="text"
          placeholder="Enter Photo No."
          value={photoNo}
          onChange={(e) => setPhotoNo(e.target.value)}
        />
        <label>Title - </label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="btn-container">
          <button className="create-post-btn">Create Album</button>
        </div>
      </form>
    </div>
  );
}
export default CreateAlbum;
