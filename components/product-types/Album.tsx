import { CSSProperties, Fragment } from "react";
import Image from "next/image";

type AlbumProps = Album[]

interface Album {
  id: string,
  productName: string,
  discountedPrice: number,
  originalPrice: number,
  link: string,
  image: {
    id: string,
    src: string,
  }
}

const Album = ( props : AlbumProps) => {
  console.log("testing", props);
  return (
    <Fragment>
      album card product
    </Fragment>
  );
};

export default Album;
