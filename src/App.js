import { Route, Routes as Switch } from "react-router-dom";
import AlbumContainer from "./AlbumContainer";
import Navbar from "./Navbar";
import CreateAlbum from "./CreateAlbum";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" element={<AlbumContainer />} />
        <Route path="/createAlbum" element={<CreateAlbum />} />
      </Switch>
    </div>
  );
}

export default App;
