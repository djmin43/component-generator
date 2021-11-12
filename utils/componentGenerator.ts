import React, { ReactNode } from "react"

interface ComponentType {
  id: number,
  component: ReactNode,
  message: string,
}

export const componentGenerator = (component : any ) => {
  return React.createElement(component.component, { message: component.message })
}