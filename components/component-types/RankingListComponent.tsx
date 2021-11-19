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
    <>
      <p>{props.header}</p>
    </>
  );
};

export default RankingListComponent;
