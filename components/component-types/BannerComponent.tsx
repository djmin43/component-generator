import React from "react";
import Image from "next/image";

interface Props {
  props: {
    header: string,
    bannerImageList: Image[]
  }
}

interface Image {
  id: string,
  imageSrc: string,
  link: string,
}

const BannerComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
      <div className="image-container">
        {props.bannerImageList.map}
        {props.bannerImageList.map((image: Image) =>
        <a href="" key={image.id}>
          <Image
            src={image.imageSrc}
            width={300}
            height={300} 
            alt="image"
          />
        </a>
        )}
      </div>
    </div>
  );
};

export default BannerComponent;
