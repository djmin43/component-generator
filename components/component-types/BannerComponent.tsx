import React from "react";
import Image from "next/image";
import { css } from "@emotion/css";

interface Props {
  props: {
    bannerImageType: string,
    bannerImageList: Image[],
    style: {
      bannerImageWidth: number,
      bannerImageHeight: number,
    }
  }
}

interface Image {
  id: string,
  imageSrc: string,
  link: string,
  containerWidth: number,
  containerHeight: number
}

const BannerComponent = ({props}: Props) => {
  return (
    <div>
      <div className={imageContainerStyle}>
        {props.bannerImageList.map}
        {props.bannerImageList.map((image: Image) =>
        <a href={image.link} key={image.id}>
          <Image
            src={image.imageSrc}
            layout="intrinsic"
            alt="image"
            width = {props.style.bannerImageWidth}
            height = {props.style.bannerImageWidth}
          />
        </a>
        )}
      </div>
    </div>
  );
};

const imageContainerStyle = css`
  width: 100%;
`;

export default BannerComponent;
