import Image from "next/image";
import { css } from "@emotion/css";

interface AlbumProps {
  props: Album[]
}

interface Album {
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

const Album = ( { props } : AlbumProps) => {
  console.log("album", props);
  return (
    <div className={albumStyle}>
      {props.map((product: Album) => 
      <div
        key={product.id}
        className={productContainerStyle}
        >
          <Image
            src={product.image.src}
            layout="intrinsic"
            width={300}
            height={300}
            alt="album product image"
          />
        <p>{product.productName}</p>
        <p>{product.discountedPrice}%</p>
        <p>{product.originalPrice}원</p>
      </div>
      )}
    </div>
  );
};

const productContainerStyle = css`
  display: flex;
  flex-direction: column;
  font-size: 10px;
`;

const albumStyle = css`
  display: inline-flex
`;

export default Album;
