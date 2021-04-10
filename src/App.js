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

      <Post
        username="Remy Sharp"
        imgURL="https://images.unsplash.com/photo-1617939254715-cce00563cbc3"
        caption="Wow"
      />
      <Post
        username="Travis Howard"
        imgURL="https://images.unsplash.com/photo-1617775623669-20bff4ffaa5c"
        caption="Wow"
      />
      <Post
        username="Cindy Baker"
        imgURL="https://images.unsplash.com/photo-1616173758552-d6d8905cf655"
        caption="Wow"
      />
    </div>
  );
}

export default App;