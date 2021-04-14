import { Button } from "@material-ui/core";
import { useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
import "../css/ImageUpload.css";

const ImageUpload = ({ username, setOpenImageUpload }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          // post image inside db
          db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageURL: downloadURL,
            username: username,
          });

          // setProgress(0);
          setCaption("");
          setImage(null);
          setOpenImageUpload(false);
        });
      }
    );
  };

  return (
    <div className="imageUpload">
      {progress > 0 && (
        <progress
          value={progress}
          max="100"
          className="imageUpload__progress"
        />
      )}

      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="imageUpload__item"
      />
      <input
        type="file"
        onChange={handleChange}
        className="imageUpload__item"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleUpload}
        className="imageUpload__item"
      >
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;
