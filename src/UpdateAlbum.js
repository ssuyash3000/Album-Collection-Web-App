import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./UpdateAlbum.css";
import { useNavigate } from "react-router-dom";

const UpdateAlbum = (props) => {
  const { pos } = useParams();
  const navigate = useNavigate();
  // console.log(props);

  let { state, setState } = props;

  let [newUserId, setNewUserId] = useState("");
  let [newAlbumTitle, setNewAlbumTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target);
    // console.log(newUserId);
    // console.log(newAlbumTitle);
    state[pos].userId = newUserId;
    state[pos].title = newAlbumTitle;
    let newState = [...state];
    // console.log(newState);
    fetch(`https://jsonplaceholder.typicode.com/albums/${pos + 1}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: newAlbumTitle,
        userId: newUserId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setState(newState);
    navigate(`/`);
  };

  return (
    <div className="update-album">
      <form onSubmit={handleSubmit} className="form-field">
        <label>Update User Id</label>
        <input
          placeholder="Enter new userId"
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
        <label>Update Album Title</label>
        <input
          placeholder="Enter new Album Title"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        {/* <Link to="/"> */}
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default UpdateAlbum;
