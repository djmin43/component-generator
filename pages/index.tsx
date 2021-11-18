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
      header: "배너",
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
    component: "RankingListComponent",
    props: {
      header: "랭킹"
    }
  },
  {
    id: 3123841923492,
    component: "SubMenuComponent",
    props: {
      header: "MD'S CHOICE"
    }
  },
  {
    id: 3123841923492,
    component: "ImageListComponent",
    props: {
      header: "즐거운 집콕생활 \n 닌텐도/레고 외 최대 35% 할인"
    }
  },
  {
    id: 3123841923492,
    component: "TextOverlayImageComponent",
    props: {
      header: "#TECH",
      subheader: "이달의 브랜드 & 제품"
    }
  },
];


export default Home;
