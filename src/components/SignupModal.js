import { Modal } from "@material-ui/core";
import { useState } from "react";
import Signup from "./Signup";
import { getModalStyle, useStyles } from "../modalStyles";


const SignupModal = ({
  openSignUp,
  onClose,
  email,
  username,
  password,
  onSignup,
  onSetEmail,
  onSetUsername,
  onSetPassword,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div>
      <Modal open={openSignUp} onClose={onClose}>
        <>
          <div style={modalStyle} className={`${classes.paper} paper__items`}>
            <Signup
              email={email}
              username={username}
              password={password}
              onSignup={onSignup}
              onSetEmail={onSetEmail}
              onSetUsername={onSetUsername}
              onSetPassword={onSetPassword}
            />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default SignupModal;
