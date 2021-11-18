import React from "react";

interface Props {
  props: {
    header: string,
  }
}

const ImageListComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
    </div>
  );
};

export default ImageListComponent;
