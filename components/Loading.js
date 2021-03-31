import styled from "styled-components";
import Logo from "../Images/FacebookLogo.png";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingInnerContainer>
        <img src={Logo} alt="logo" />
        <CircularProgress className="progress" />
      </LoadingInnerContainer>
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: #f2f2f2;
`;

const LoadingInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 100px;
  background-color: #f2f2f2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px;
  > img {
    object-fit: contain;
    height: 200px;
  }

  > .progress {
    margin-top: 10%;
  }
`;
