import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

function Post({ profilePic, imgName, username, message, timestamp }) {
  return (
    <PostContainer>
      <PostHeader>
        <PostAvatar src={profilePic} alt={username} />
        <PostHeaderInfo>
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </PostHeaderInfo>
      </PostHeader>
      <PostBottomContainer>
        <p>{message}</p>
      </PostBottomContainer>
      {imgName ? (
        <PostImage>
          <img
            src={`https://zonghong-facebook-mern.herokuapp.com/retrieve/image/single?name=${imgName}`}
            alt=""
          />
        </PostImage>
      ) : (
        console.log("no image")
      )}
      <PostOptions>
        <PostOption>
          <ThumbUpIcon />
          <p>Like</p>
        </PostOption>
        <PostOption>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </PostOption>
        <PostOption>
          <NearMeIcon />
          <p>Share</p>
        </PostOption>
        <PostOption>
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </PostOption>
      </PostOptions>
    </PostContainer>
  );
}

export default Post;

const PostContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const PostHeader = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
`;

const PostHeaderInfo = styled.div`
  > h3 {
    font-size: medium;
  }
  > p {
    font-size: small;
    color: gray;
  }
`;

const PostAvatar = styled(Avatar)`
  margin-right: 10px;
  :hover {
    opacity: 0.8;
  }
`;

const PostBottomContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`;

const PostImage = styled.div`
  > img {
    width: 100%;
  }
`;

const PostOptions = styled.div`
  padding-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
`;

const PostOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;
  > p {
    margin-left: 10px;
  }
  :hover {
    background-color: #eff2f5;
    border-radius: 10px;
  }
`;
