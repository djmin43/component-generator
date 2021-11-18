import type { NextPage } from "next";
import Main from "../components/main/Main";
import ControlBar from "../components/control-bar/ControlBar";
import { css } from "@emotion/css";

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
  {
    id: 11234123419234,
    component: "BannerComponent",
    props: {
      header: "banner main",
    }
  },
  {
    id: 2123849123482194,
    component: "ImageListComponent",
    props: {
      header: "ghgjghjgjh",
    }
  },
  {
    id: 3123841923492,
    component: "ProductComponent",
    props: {
      header: "product list main"
    }
  }
];


export default Home;
