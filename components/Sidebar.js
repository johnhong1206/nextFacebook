import styled from "styled-components";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./SidebarRow";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [user, loading] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarRow src={user?.photoURL} title={user?.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="more" />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  padding: 25px 10px;
  flex: 0.33;
`;
