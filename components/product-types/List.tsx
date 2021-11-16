import React, { CSSProperties } from "react";
import Image from "next/image";

interface ListProps {
  props: {
    imageSrc: string;
    brand: string;
    productName: string;
    discount: number;
    price: number;
    style?: CSSProperties;
  };
}

const List = ({
  imageSrc,
  brand,
  productName,
  discount,
  price
}: ListProps["props"]) => {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Image src={imageSrc} alt="product-name" width={300} height={300} />
      <div>
        <span>{brand}</span>
        <span>{productName}</span>
        <span>{discount}%</span>
        <span>{price}원</span>
      </div>
    </div>
  );
};

export default List;
