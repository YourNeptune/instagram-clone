import "./css/App.css";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { Button } from "@material-ui/core";
import SignupModal from "./components/SignupModal";
import SignInModal from "./components/SignInModal";
import ImageUploadModal from "./components/ImageUploadModal";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import HomeIcon from "@material-ui/icons/Home";

function App() {
  const [posts, setPosts] = useState([]);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));

    setOpenSignUp(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));

    setOpenSignIn(false);
    setEmail("");
    setPassword("");
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
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  });

  return (
    <div className="App">
      <SignupModal
        openSignUp={openSignUp}
        onClose={() => setOpenSignUp(false)}
        email={email}
        username={username}
        password={password}
        onSignup={signUp}
        onSetEmail={(e) => setEmail(e.target.value)}
        onSetUsername={(e) => setUsername(e.target.value)}
        onSetPassword={(e) => setPassword(e.target.value)}
      />

      <SignInModal
        openSignIn={openSignIn}
        onClose={() => setOpenSignIn(false)}
        email={email}
        password={password}
        onSignIn={signIn}
        onSetEmail={(e) => setEmail(e.target.value)}
        onSetPassword={(e) => setPassword(e.target.value)}
      />

      {user?.displayName && (
        <ImageUploadModal
          openImageUpload={openImageUpload}
          setOpenImageUpload={setOpenImageUpload}
          onClose={() => setOpenImageUpload(false)}
          username={user.displayName}
        />
      )}

      <div className="App__header">
        <img
          className="App__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
          alt="instagram-logo"
        />

        {user ? (
          <div className="header__icons">
            <HomeIcon className="header__icon" />
            <AddAPhotoIcon
              className="header__icon"
              onClick={() => setOpenImageUpload(true)}
            />
            <Button type="button" onClick={() => auth.signOut()}>
              Log out
            </Button>
          </div>
        ) : (
          <div>
            <Button type="button" onClick={() => setOpenSignIn(true)}>
              Sign in
            </Button>
            <Button type="button" onClick={() => setOpenSignUp(true)}>
              Sign up
            </Button>
          </div>
        )}
      </div>

      <div className='posts'>
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            postId={id}
            username={post.username}
            imageURL={post.imageURL}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
