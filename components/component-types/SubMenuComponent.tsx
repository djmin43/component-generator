import React from "react";
import { componentGenerator } from "../../utils/componentGenerator";
import stringToComponent from "../../utils/stringToComponent";

interface Props {
  props: {
    isComponentActive: boolean,
    header: string,
    link: string,
    productListComponent: string,
    productList: any,
  }
}

const SubMenuComponent = ({props}: Props) => {
  return (
    <>
      <p>{props.header}</p>
      <div>
        {componentGenerator(stringToComponent(props.productListComponent), { props: props.productList })}
      </div>
    </>
  );
};

export default SubMenuComponent;
