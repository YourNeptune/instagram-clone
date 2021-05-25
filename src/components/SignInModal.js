import { Modal } from "@material-ui/core";
import { useState } from "react";
import { getModalStyle, useStyles } from "../modalStyles";
import SignIn from "./SignIn";

const SignInModal = ({
  openSignIn,
  onClose,
  email,
  password,
  onSignIn,
  onSetEmail,
  onSetPassword,
  DemoSignIn,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div>
      <Modal open={openSignIn} onClose={onClose}>
        <>
          <div style={modalStyle} className={`${classes.paper} paper__items`}>
            <SignIn
              email={email}
              password={password}
              onSignIn={onSignIn}
              onSetEmail={onSetEmail}
              onSetPassword={onSetPassword}
              DemoSignIn={DemoSignIn}
            />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default SignInModal;
