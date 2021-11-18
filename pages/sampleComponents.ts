import { v4 as uuidv4 } from "uuid";

export const bannerOne = {
  id: uuidv4(),
  component: "BannerComponent",
  props: {
    header: "배너",
    productListType: "Album",
    bannerImageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1637160083545-3907c0548d62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        link: "https://www.travelflan.com/",
        type: "square",
      }
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
