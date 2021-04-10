import "./css/App.css";
import Post from "./components/Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Remy Sharp",
      imgURL: "https://images.unsplash.com/photo-1617939254715-cce00563cbc3",
      caption: "Wow",
    },
    {
      username: "Travis Howard",
      imgURL: "https://images.unsplash.com/photo-1617775623669-20bff4ffaa5c",
      caption: "Wow",
    },
    {
      username: "Cindy Baker",
      imgURL: "https://images.unsplash.com/photo-1616173758552-d6d8905cf655",
      caption: "Wow",
    },
  ]);

  return (
    <div className="App">
      <div className="App__header">
        <img
          className="App__logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="instagram-logo"
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          imgURL={post.imgURL}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
