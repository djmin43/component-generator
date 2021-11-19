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

const productComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
      <a href={props.link}>MORE</a>
        {componentGenerator(stringToComponent(props.productListComponent), { props: props.productList })}
    </div>
  );
};

export default productComponent;
