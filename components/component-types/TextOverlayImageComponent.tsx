import React from "react";
import Image from "next/image";
import { componentGenerator } from "../../utils/componentGenerator";
import stringToComponent from "../../utils/stringToComponent";

interface Props {
  props: {
    isComponentActive: boolean,
    header: string,
    subHeader: string,
    link: string,
    productListComponent: string,
    productList: any,
    imageList: Image[],
    style: {
      imageWidth: number,
      imageHeight: number,
    }
  }
}

interface Image {
  id: string,
  imageSrc: string,
  link: string,
}


const TextOverlayImageComponent = ({ props }: Props) => {
  return (
    <div>
      <p>{props.subHeader}</p>
      <p>{props.header}</p>
      <div className="image">
        {props.imageList.map((image: Image) => 
        <div key={image.id}>
          <a href={image.link}>
            <Image
              layout="intrinsic"
              src={image.imageSrc}
              height={props.style.imageHeight}
              width={props.style.imageWidth}
              alt="image"
            />
          </a>
        </div>
        )}
      </div>
      <div className="product-list">
        {componentGenerator(stringToComponent(props.productListComponent), { props: props.productList })}
      </div>
    </div>
  );
};

export default TextOverlayImageComponent;
