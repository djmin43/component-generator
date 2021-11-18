import { FunctionComponent } from "react";
import BannerComponent from "../components/component-types/BannerComponent";
import ImageListComponent from "../components/component-types/ImageListComponent";
import ProductComponent from "../components/component-types/productComponent";
import RankingListComponent from "../components/component-types/RankingListComponent";
import SubMenuComponent from "../components/component-types/SubMenuComponent";
import TextOverlayImageComponent from "../components/component-types/TextOverlayImageComponent";
import Album from "../components/product-types/Album";
import List from "../components/product-types/List";


type ComponentType = {
  [Key in string]: FunctionComponent<{ props: any }>;
};

const themeComponent: ComponentType = {
  BannerComponent,
  ImageListComponent,
  ProductComponent,
  RankingListComponent,
  SubMenuComponent,
  TextOverlayImageComponent,
  Album,
  List,
};

type StringToComponent = (
  componentName: string
) => FunctionComponent<{ props: any }>;

const stringToComponent: StringToComponent = (componentName) => {
  return themeComponent[componentName];
};

export default stringToComponent;
