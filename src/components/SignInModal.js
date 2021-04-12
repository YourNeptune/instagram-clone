import { Modal } from "@material-ui/core";
import { useState } from "react";
import { getModalStyle, useStyles } from "../modalStyles";
import SignIn from "./SignIn";

const SignInModal = ({
  openSignIn,
  onClose,
  username,
  password,
  onSignIn,
  onSetUsername,
  onSetPassword,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div>
      <Modal open={openSignIn} onClose={onClose}>
        <>
          <div style={modalStyle} className={`${classes.paper} paper__items`}>
            <SignIn
              username={username}
              password={password}
              onSignIn={onSignIn}
              onSetUsername={onSetUsername}
              onSetPassword={onSetPassword}
            />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default SignInModal;
