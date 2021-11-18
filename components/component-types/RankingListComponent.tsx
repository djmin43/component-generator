import React from "react";

interface Props {
  props: {
    isComponentActive: boolean,
    header: string,
    productList: any,
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
