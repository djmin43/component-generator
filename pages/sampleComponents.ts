import { v4 as uuidv4 } from "uuid";
import { productListSample } from "./productList";

export const bannerSquare = {
  id: uuidv4(),
  component: "BannerComponent",
  props: {
    isComponentActive: true,
    bannerImageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1637160083545-3907c0548d62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        link: "https://www.travelflan.com/",
      }
    ],
    style: {
      bannerImageWidth: 3000,
      bannerImageHeight: 3000,
    }
  }
};

export const bannerRectangle = {
  id: uuidv4(),
  component: "BannerComponent",
  props: {
    isComponentActive: true,
    bannerImageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        link: "https://www.travelflan.com/",
      }
    ],
    style: {
      bannerImageWidth: 3200,
      bannerImageHeight: 1040,
    }
  }
};

export const rankingListOne = {
  id: uuidv4(),
  component: "RankingListComponent",
  props: {
    isComponentActive: true,
    header: "인기상품",
    productList: productListSample,
  }
};

export const rankingListTwo = {
  id: uuidv4(),
  component: "RankingListComponent",
  props: {
    isComponentActive: true,
    header: "판매순위",
    productList: productListSample,
  }
};

export const subMenuOne = {
  id: uuidv4(),
  component: "SubMenuComponent",
  props: {
    isComponentActive: true,
    header: "MD'S CHOICE",
    productListComponent: "Album",
    categoryList: null,
    productList: productListSample,
  }
};

export const subMenuTwo = {
  id: uuidv4(),
  component: "SubMenuComponent",
  props: {
    isComponentActive: true,
    header: "CHIHO'S CHOICE",
    productListComponent: "Album",
    categoryList: null,
    productList: productListSample,
  }
};

export const imageListSquare = {
  id: uuidv4(),
  component: "ImageListComponent",
  props: {
    isComponentActive: true,
    header: "즐거운 집콕생활 \n 닌텐도/레고 외 최대 35% 할인",
    link: "https://www.travelflan.com/",
    productListComponent: "List",
    productList: productListSample,
    imageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        link: "https://www.travelflan.com/",
      }
    ],
    style: {
      imageWidth: 3000,
      imageHeight: 3000,
    }
  }
};

export const imageListRectange = {
  id: uuidv4(),
  component: "ImageListComponent",
  props: {
    isComponentActive: true,
    header: "안녕하세요 저의 이름은 민동준입니다. 만나서 반갑습니다!",
    link: "https://www.travelflan.com/",
    productListComponent: "Album",
    productList: productListSample,
    imageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        link: "https://www.travelflan.com/",
      }
    ],
    style: {
      imageWidth: 2880,
      imageHeight: 2160,
    }
  }
};

export const imageListLongRectangle = {
  id: uuidv4(),
  component: "ImageListComponent",
  props: {
    isComponentActive: true,
    header: "Hello world!",
    link: "https://www.travelflan.com/",
    productListComponent: "List",
    productList: productListSample,
    imageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        link: "https://www.travelflan.com/",
      }
    ],
    style: {
      imageWidth: 2160,
      imageHeight: 2880,
    }
  }
};

export const textOverlayImageLongRectangle = {
  id: uuidv4(),
  component: "TextOverlayImageComponent",
  props: {
    isComponentActive: true,
    header: "#TECH",
    subHeader: "이달의 브랜드 & 제품",
    link: "https://www.travelflan.com/",
    productListComponent: "List",
    productList: productListSample,
    imageList: [
      {
        id: uuidv4(),
        imageSrc: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        link: "https://www.travelflan.com/",
      }
    ],
    style: {
      imageWidth: 2160,
      imageHeight: 2880,
    }
  }
};

export const productOne = {
  id: uuidv4(),
  component: "ProductComponent",
  props: {
    header: "WEEKLY 특가",
  }
};
