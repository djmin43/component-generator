import React from "react";
import Image from "next/image";
import { componentGenerator } from "../../utils/componentGenerator";
import stringToComponent from "../../utils/stringToComponent";
import { css } from "@emotion/css";
import Album from "../product-types/Album";

interface Props {
  props: any
}

const ImageListMain = ({ props }: Props) => {
  return (
    <div>
      <span style={props.style.header}>
        {props.isHeaderActive && props.header}
      </span>
      <div className="main-image">
        {props.mainImageList.map((image: any) =>
        <div key={image.id}>
          <a href={image.link}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt="main image"
            />
          </a>
        </div>
        )}
      </div>
      <div>
        {props.productComponent}
        {/* {stringToComponent(props.productComponent)} */}
        {componentGenerator(stringToComponent(props.productComponent), { props })}
        {/* {componentGenerator(Album, {props: props})} */}
      </div>
    </div>
  );
};

const productStyle = css`
  display: flex;
`;

export default ImageListMain;
