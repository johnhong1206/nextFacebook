import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../config/axios";
import Pusher from "pusher-js";
import StoryReel from "./StoryReel";
import Post from "./Post";
import MessageSender from "./MessageSender";

function Feeds() {
  const [posts, setPosts] = useState([]);

  const syncFeed = () => {
    axios.get("/retreive/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    syncFeed();
    const pusher = new Pusher("fa985423e771becbd170", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("posts");
    channel.bind("inserted", function (data) {
      syncFeed();
    });
  }, []);

  return (
    <FeedsContainer>
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.text}
          timestamp={post.timestamp}
          username={post.username}
          imgName={post.imgName}
        />
      ))}
    </FeedsContainer>
  );
}

export default Feeds;

const FeedsContainer = styled.div`
  flex: 1;
  padding: 30px 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
