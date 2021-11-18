import React from "react";

interface Props {
  props: {
    header: string
  }
}

const SubMenuComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
    </div>
  );
};

export default SubMenuComponent;
