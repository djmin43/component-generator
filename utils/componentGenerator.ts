import {
  Attributes,
  createElement,
  FunctionComponent,
  FunctionComponentElement,
  ReactNode
} from "react";
import BannerMain from "../components/component-types/BannerMain";
import ImageListMain from "../components/component-types/ImageListMain";
import ProductListMain from "../components/component-types/ProductListMain";

type ComponentGenerator = {
  <P extends {}>(
    type: FunctionComponent<P>,
    props?: (Attributes & P) | null,
    ...children: ReactNode[]
  ): FunctionComponentElement<P>;
};

export const componentGenerator: ComponentGenerator = (
  type,
  props,
  ...children
) => {
  return createElement(type, props, ...children);
};

const components = {
  bannerList: BannerMain,
  imageListMain: ImageListMain,
  productListMain: ProductListMain
};
