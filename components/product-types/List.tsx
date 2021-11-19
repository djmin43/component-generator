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
  return (
    <div className={listStyle}>
      {props.map((product: List) => 
      <div
        key={product.id}
        className={listContainerStyle}
        >
          <div>
            <a href={product.link}>
              <Image
                src={product.image.src}
                layout="intrinsic"
                width={100}
                height={100}
                alt="album product image"
              />
            </a>
          </div>
          <div>
            list
            <p>{product.productName}</p>
            <p style={{ color: "blue" }}>{product.discount}%</p>
            <p>{product.originalPrice}원</p>
          </div>
      </div>
      )}
    </div>
  );
};

const listStyle = css`
  display: flex;
  flex-direction: column;
`;

const listContainerStyle = css`
  display: flex;
  font-size: 10px;
`;



export default List;
