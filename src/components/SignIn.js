import { Button, OutlinedInput } from "@material-ui/core";
import "../css/Signup.css";

const SignIn = ({
  email,
  password,
  onSignIn,
  onSetEmail,
  onSetPassword,
  DemoSignIn,
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
          placeholder="Email"
          value={email}
          onChange={onSetEmail}
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
        <Button
          className="paper__btn"
          type="submit"
          variant="contained"
          onClick={DemoSignIn}
        >
          Demo Sign in
        </Button>
      </div>
    </>
  );
};

export default SignIn;
