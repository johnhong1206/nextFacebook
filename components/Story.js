import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <StoryContainer style={{ backgroundImage: `url(${image})` }}>
      <StoryAvatar src={profileSrc} alt={title} />
      <h4>{title}</h4>
    </StoryContainer>
  );
}

export default Story;

const StoryContainer = styled.div`
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  transition: transform 100ms ease-in;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  > h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }
  > h4:hover {
    color: #2e81f4;
  }
  :hover {
    transform: scale(1.07);
  }
`;

const StoryAvatar = styled(Avatar)`
  margin: 10px;
  border: 5px solid #2e81f4;
  :hover {
    opacity: 0.8;
  }
`;
