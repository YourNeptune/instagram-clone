import ImageUpload from "./ImageUpload";
import { getModalStyle, useStyles } from "../modalStyles";
import { useState } from "react";
import { Modal } from "@material-ui/core";

const ImageUploadModal = ({
  openImageUpload,
  setOpenImageUpload,
  onClose,
  username,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div>
      <Modal open={openImageUpload} onClose={onClose}>
        <>
          <div style={modalStyle} className={`${classes.paper} paper__items`}>
            <ImageUpload
              username={username}
              setOpenImageUpload={setOpenImageUpload}
            />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default ImageUploadModal;
