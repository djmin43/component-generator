import type { NextPage } from "next";
import Main from "../components/main/Main";
import ControlBar from "../components/control-bar/ControlBar";
import { css } from "@emotion/css";
import {
  bannerSquare,
  bannerRectangle,
  rankingListOne,
  subMenuOne,
  imageListSquare,
  imageListRectange,
  imageListLongRectangle,
  textOverlayImageOne,
  productOne,
} from "./sampleComponents";

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
  textOverlayImageOne, imageListRectange, subMenuOne, imageListLongRectangle, bannerSquare, imageListSquare, productOne, bannerRectangle, rankingListOne, 
];


export default Home;
