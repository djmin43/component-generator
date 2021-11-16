import { CSSProperties, Fragment } from "react";
import Image from "next/image";

interface AlbumProps {
  props: {
    imageSrc: string;
    brand: string;
    productName: string;
    discount: number;
    price: number;
    style?: CSSProperties;
  };
}

const Album = ({
  imageSrc,
  brand,
  productName,
  discount,
  price
}: AlbumProps["props"]) => {
  return (
    <Fragment>
      <Image src={imageSrc} alt="productName" width={300} height={300} />
      <div className="product-information">
        <span>{brand}</span>
        <span>{productName}</span>
        <span>{discount}%</span>
        <span>{price}원</span>
      </div>
    </Fragment>
  );
};

export default Album;
