import "./css/App.css";
import Post from "./components/Post";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { Button, Modal } from "@material-ui/core";

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  });

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <Signup />
      </Modal>
      <div className="App__header">
        <img
          className="App__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
          alt="instagram-logo"
        />
        <Button type="button" onClick={() => setOpen(true)}>
          Sign up
        </Button>
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          imgURL={post.imgURL}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
