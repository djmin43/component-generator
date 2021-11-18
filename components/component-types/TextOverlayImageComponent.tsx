import React from "react";

interface Props {
  props: {
    header: string,
    subheader: string,
  }
}

const TextOverlayImageComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.subheader}</p>
      <p>{props.header}</p>
    </div>
  );
};

export default TextOverlayImageComponent;
