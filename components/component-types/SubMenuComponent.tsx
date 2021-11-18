import React from "react";
import { componentGenerator } from "../../utils/componentGenerator";
import stringToComponent from "../../utils/stringToComponent";

interface Props {
  props: {
    isComponentActive: boolean,
    header: string,
    productListComponent: string,
    categoryList: any,
    productList: any,
  }
}

const SubMenuComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
    </div>
  );
};

export default SubMenuComponent;
