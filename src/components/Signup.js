import { Button, makeStyles, OutlinedInput } from "@material-ui/core";
import { forwardRef, useState } from "react";
import "../css/Signup.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid lightgray",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Signup = forwardRef(
  (
    {
      email,
      username,
      password,
      onSignup,
      onSetEmail,
      onSetUsername,
      onSetPassword,
    },
    ref
  ) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
      <div
        ref={ref}
        style={modalStyle}
        className={`${classes.paper} paper__items`}
      >
        <img
          className="paper__logo"
          alt="instagram-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
        />

        <div className="paper__body">
          <h4 className="paper__text">
            Sign up to see photos and videos from your friends.
          </h4>
          <OutlinedInput
            className="paper__item"
            type="text"
            placeholder="Email"
            value={email}
            onChange={onSetEmail}
          />
          <OutlinedInput
            className="paper__item"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onSetUsername}
          />
          <OutlinedInput
            className="paper__item"
            type="text"
            placeholder="Password"
            value={password}
            onChange={onSetPassword}
          />
          <Button
            className="paper__btn"
            type="submit"
            variant="contained"
            onClick={onSignup}
          >
            Sign up
          </Button>

          <p className="paper__text paper__textp">
            By signing up, you agree to our <strong>Terms</strong> ,
            <strong>Data Policy</strong>and <strong>Cookies Policy</strong>.
            (dummy text)
          </p>
        </div>
      </div>
    );
  }
);

export default Signup;
