import React from "react";

interface Props {
  props: {
    header: string,
  }
}

const RankingListComponent = ({props}: Props) => {
  return (
    <div>
      <p>{props.header}</p>
    </div>
  );
};

export default RankingListComponent;
