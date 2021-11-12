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
          {React.createElement(item.component, { message: item.message })}
        </div>
      )}
    </div>
  )
}

const componentList = [
  {
    id: 1,
    component: BannerMain,
    message: 'my name is',
  },
  {
    id: 2,
    component: ImageListMain,
    message: 'min dongjoon',
  },
  {
    id: 3,
    component: ProductListMain,
    message: 'i am 33',
  }
]

export default Main
