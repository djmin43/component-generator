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
  textOverlayImageLongRectangle,
  productOne,
  subMenuTwo,
} from "./sampleComponents";

const Home: NextPage = () => {
  return (
    <div className={mainIndexPageStyle}>
      <Main componentList={componentList} />
      <ControlBar componentList={componentList} />
    </div>
  );
};

const mainIndexPageStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const componentList = [
  productOne,
  textOverlayImageLongRectangle,
  imageListRectange,
  subMenuOne,
  subMenuTwo,
  imageListLongRectangle,
  bannerSquare,
  imageListSquare,
  bannerRectangle,
  rankingListOne, 
];


export default Home;
