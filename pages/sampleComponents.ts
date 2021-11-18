import { v4 as uuidv4 } from "uuid";

export const bannerOne = {
  id: uuidv4(),
  component: "BannerComponent",
  props: {
    header: "배너",
    imageList: [

    ]
  }
};

export const rankingListOne = {
  id: uuidv4(),
  component: "RankingListComponent",
  props: {
    header: "랭킹"
  }
};

export const subMenuOne = {
  id: uuidv4(),
  component: "SubMenuComponent",
  props: {
    header: "MD'S CHOICE"
  }
};

export const imageListOne = {
  id: uuidv4(),
  component: "ImageListComponent",
  props: {
    header: "즐거운 집콕생활 \n 닌텐도/레고 외 최대 35% 할인"
  }
};

export const textOverlayImageOne = {
  id: uuidv4(),
  component: "TextOverlayImageComponent",
  props: {
    header: "#TECH",
    subheader: "이달의 브랜드 & 제품"
  }
};

export const productOne = {
  id: uuidv4(),
  component: "ProductComponent",
  props: {
    header: "WEEKLY 특가",
  }
};
