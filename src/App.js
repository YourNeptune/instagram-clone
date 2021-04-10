import "./css/App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <img
          className="App__logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="instagram-logo"
        />
      </div>
      <h1>Instagram Clone</h1>

      <Post />
    </div>
  );
}

export default App;
