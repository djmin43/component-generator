import React from 'react'
import BannerMain from '../component-types/BannerMain'
import ImageListMain from '../component-types/ImageListMain'
import ProductListMain from '../component-types/ProductListMain'

interface Component {
  id: number,
  component: string,
}

interface MainProps {
  componentList: Component[]
}

const Main = () => {
  return (
    <div>
      main page
      {componentList.map(item => 
        <div key={item.id}>
          {React.createElement(item.component)}
        </div>
      )}
    </div>
  )
}

const componentList = [
  {
    id: 1,
    component: BannerMain,
  },
  {
    id: 2,
    component: ImageListMain,
  },
  {
    id: 3,
    component: ProductListMain,
  }
]

export default Main
