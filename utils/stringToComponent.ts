import { FunctionComponent } from "react";
import BannerMain from "../components/component-types/BannerMain";
import ImageListMain from "../components/component-types/ImageListMain";
import ProductListMain from "../components/component-types/ProductListMain";

type ComponentType = {
  [Key in string]: FunctionComponent<{ props: any }>;
};

const themeComponent: ComponentType = {
  BannerMain,
  ImageListMain,
  ProductListMain
};

type StringToComponent = (
  componentName: string
) => FunctionComponent<{ props: any }>;

const stringToComponent: StringToComponent = (componentName) => {
  return themeComponent[componentName];
};

export default stringToComponent;
