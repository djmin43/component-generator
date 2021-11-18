import type { NextPage } from "next";
import Main from "../components/main/Main";
import ControlBar from "../components/control-bar/ControlBar";
import { css } from "@emotion/css";
import { bannerOne, rankingListOne, subMenuOne, imageListOne, textOverlayImageOne, productOne } from "./sampleComponents";

const Home: NextPage = () => {
  return (
    <div className={mainIndexPageStyle}>
      <Main componentList={componentList} />
      <ControlBar />
    </div>
  );
};

const mainIndexPageStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const componentList = [
  textOverlayImageOne, subMenuOne, imageListOne, productOne, bannerOne, rankingListOne, 
];


export default Home;
