import React from "react";

interface Component {
  id: string;
  component: string;
  props: any;
}

interface MainProps {
  componentList: Component[];
}


const ControlBar = ( { componentList }: MainProps) => {
  return (
    <div>
      i am controller
      <button>
        add component
      </button>
      <button>
        edit component
      </button>
      <button>
        delete component
      </button>
    </div>
  );
};

export default ControlBar;
