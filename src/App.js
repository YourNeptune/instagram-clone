import "./css/App.css";
import Post from "./components/Post";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { Button, Modal } from "@material-ui/core";

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        console.log("✅", authUser);
        setUser(authUser);
      } else {
        // user has logged out
        setUser(null);
      }
    });

    console.log("User:", user);

    return () => {
      // perform some cleanup actions
    };
  }, [user]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  });

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <Signup
            email={email}
            username={username}
            password={password}
            onSignup={signup}
            onSetEmail={(e) => setEmail(e.target.value)}
            onSetUsername={(e) => setUsername(e.target.value)}
            onSetPassword={(e) => setPassword(e.target.value)}
          />
        </>
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
