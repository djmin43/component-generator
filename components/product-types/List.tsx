import React, { CSSProperties } from "react";
import Image from "next/image";
import { css } from "@emotion/css";

interface ListProps {
  props: List[]
}

interface List {
  id: string,
  productName: string,
  discountedPrice: number,
  originalPrice: number,
  link: string,
  discount: number,
  image: {
    id: string,
    src: string,
  }
}
const List = ({ props }: ListProps) => {
  console.log("list", props);
  return (
    <div>
    </div>
  );
};


export default List;
