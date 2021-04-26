import { useState } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import axios from "../config/axios";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SendIcon from "@material-ui/icons/Send";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [user, loading] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [sendImg, setSendImg] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image && !input) {
      return false;
    }

    if (image) {
      const imgForm = new FormData();

      imgForm.append("file", image, image.name);
      axios
        .post("/upload/image", imgForm, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
          },
        })
        .then((res) => {
          const postData = {
            text: input,
            imgName: res.data.filename,
            username: user.displayName,
            profilePic: user.photoURL,
            timestamp: Date.now(),
          };
          savePost(postData);
          setImage(null);
          setInput("");
        });
    } else {
      const postData = {
        text: input,
        username: user.displayName,
        profilePic: user.photoURL,
        timestamp: Date.now(),
      };
      console.log(postData);
      savePost(postData);
      setInput("");
    }
    setInput("");
    setImage(null);
    setSendImg(false);
  };

  const savePost = async (postData) => {
    await axios.post("/upload/post", postData).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <MessageSenderContainer>
      <MessageSenderHeader>
        <Avatar src={user?.photoURL} slt={user?.displayName} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind`}
          />
          {sendImg ? (
            <input
              type="file"
              onChange={handleChange}
              className="messageSender__input"
            />
          ) : (
            <>
              <AttachFileIcon
                onClick={() => setSendImg(true)}
                className="icon"
              />
            </>
          )}
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </MessageSenderHeader>
      <MessageSenderBottom>
        <MessageSenderOption>
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </MessageSenderOption>
        <MessageSenderOption>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo / Video</h3>
        </MessageSenderOption>
        <MessageSenderOption>
          <InsertEmotionIcon style={{ color: "orange" }} />
          <h3>Feeling / Activity</h3>
        </MessageSenderOption>
      </MessageSenderBottom>
    </MessageSenderContainer>
  );
}

export default MessageSender;

const MessageSenderContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

const MessageSenderHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;

  > form {
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  > form > input {
    height: 30px;
    outline-width: 0;
    border: none;
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 999px;
    background-color: #eff2f5;
  }

  > form > button {
    display: none;
  }

  > form > .messageSender__input {
    flex: 1;
  }
`;

const MessageSenderBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MessageSenderOption = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  color: gray;
  margin: 5px;
  :hover {
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  > h3 {
    font-size: medium;
    margin-left: 10px;
  }
`;

const ProgressContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  > progress {
    flex: 1;
  }
`;
