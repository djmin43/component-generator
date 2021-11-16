import {
  Attributes,
  createElement,
  FunctionComponent,
  FunctionComponentElement,
  ReactNode
} from "react";

type ComponentGenerator = {
  <P extends {}>(
    type: FunctionComponent<P>,
    props?: (Attributes & P) | null,
    ...children: ReactNode[]
  ): FunctionComponentElement<P>;
};

export const componentGenerator: ComponentGenerator = (
  type,
  props,
  ...children
) => {
  return createElement(type, props, ...children);
};