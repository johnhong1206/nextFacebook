import styled from "styled-components";
import Story from "./Story";
import zonghongimg from "../Images/zonghongphoto.jpg";
import zonghong from "../Images/zonghong.jpg";
import sonyimage from "../Images/sonyimage.jpg";
import sonylogo from "../Images/sonylogo.jpg";
import diantalogo from "../Images/diantalogo.jpg";
import diantaimage from "../Images/diantaimage.jpg";
import samsunglogo from "../Images/samsunglogo.jpg";
import samsungimage from "../Images/samsungimage.jpg";
import uniqlologo from "../Images/uniqlologo.png";
import uniqloimag from "../Images/uniqloimage.jpg";

function StoryReel() {
  return (
    <StoryReelContainer>
      <Story image={zonghongimg} profileSrc={zonghong} title="Zong Hong Sin" />
      <Story image={sonyimage} profileSrc={sonylogo} title="Sony Malaysia" />
      <Story
        image={diantaimage}
        profileSrc={diantalogo}
        title="電獺少女-女孩的科技日常 
        "
      />
      <Story
        image={samsungimage}
        profileSrc={samsunglogo}
        title="Samsung Malaysia"
      />
      <Story
        image={uniqloimag}
        profileSrc={uniqlologo}
        title="Uniqlo Malaysia"
      />
    </StoryReelContainer>
  );
}

export default StoryReel;

const StoryReelContainer = styled.div`
  display: flex;

  padding: 10px;
`;
