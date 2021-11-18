import React from "react";
import Image from "next/image";

interface Props {
  props: {
    header: string,
  }
}

interface Image {
  id: string,
  imageSrc: string,
  link: string,
}

const ImageListComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
    </div>
  );
};

export default ImageListComponent;
