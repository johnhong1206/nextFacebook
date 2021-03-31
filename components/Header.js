import styled from "styled-components";
import Logo from "../Images/FacebookLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const [user, loading] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={Logo} alt="logo" />
        <HeaderInput>
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </HeaderInput>
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderOption>
          <HomeIcon fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <FlagIcon fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <SubscriptionsOutlinedIcon fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <StorefrontOutlinedIcon fontSize="large" />
        </HeaderOption>
        <HeaderOption>
          <SupervisedUserCircleIcon fontSize="large" />
        </HeaderOption>
      </HeaderMiddle>
      <HeaderRight>
        <HeaderRightInfo>
          <HeaderAvatar src={user?.photoURL} onClick={() => auth.signOut()} />
          <h4>{user?.displayName}</h4>
        </HeaderRightInfo>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > img {
    height: 40px;
  }
`;

const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;

  > input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const HeaderOption = styled.div`
  padding: 15px;

  :hover > .MuiSvgIcon-root {
    color: #2e81f4;
    cursor: pointer;
  }
  :active {
    border-bottom: 4px solid #2e81f4;
  }

  :active > .MuiSvgIcon-root {
    color: #2e81f4;
  }

  > .MuiSvgIcon-root {
    color: gray;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRightInfo = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    margin-left: 10px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
