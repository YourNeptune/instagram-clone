import { Button, OutlinedInput } from "@material-ui/core";
import "../css/Signup.css";

const SignIn = ({
  username,
  password,
  onSignIn,
  onSetUsername,
  onSetPassword,
}) => {
  return (
    <>
      <img
        className="paper__logo"
        alt="instagram-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
      />

      <div className="paper__body">
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
          onClick={onSignIn}
        >
          Sign in
        </Button>
      </div>
    </>
  );
};

export default SignIn;
