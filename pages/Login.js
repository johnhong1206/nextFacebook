import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth, provider } from "../config/firebase";
import Logo from "../Images/FacebookLogo.png";
import { Button } from "@material-ui/core";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={Logo} alt="logo" />
        <Button variant="container" color="primary" onClick={signIn}>
          Login
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: #f2f2f2;
`;

const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px;

  > img {
    object-fit: contain;
    height: 200px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #2e81f4;
    color: white;
  }
  > button:hover {
    margin-top: 50px;
    text-transform: inherit !important;
    color: #2e81f4;
    background-color: #f6f6f6;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px;
  }
`;
