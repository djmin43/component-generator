import React from "react";
import { css } from "@emotion/css";
import { componentGenerator } from "../../utils/componentGenerator";
import stringToComponent from "../../utils/stringToComponent";

interface Component {
  id: number;
  component: string;
  props: any;
}

interface MainProps {
  componentList: Component[];
}

const Main = ({componentList}: MainProps) => {
  return (
    <div>
      main page
      <div className={componentContainer}>
        {componentList.map((item) => (
          <div key={item.id}>
            {componentGenerator(stringToComponent(item.component), {
              props: item.props
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const componentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default Main;
