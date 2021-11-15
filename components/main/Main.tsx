import React from 'react'
import BannerMain from '../component-types/BannerMain'
import ImageListMain from '../component-types/ImageListMain'
import ProductListMain from '../component-types/ProductListMain'
import { css } from '@emotion/css'

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
      <div className={componentContainer}>
        {componentList.map(item =>
          <div key={item.id}>
            {React.createElement(item.component, { props: item.props})}
          </div>
        )}
      </div>
    </div>
  )
}

const componentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const componentList = [
  {
    id: 1,
    component: BannerMain,
    props: {
      header: 'banner main',
      style: {
        image: {
          width: 500,
          height: 500,
        }
      },
      image: [
        {
          id: 'first-image',
          src: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80'
        }
      ],
    },
  },
  {
    id: 2,
    component: ImageListMain,
    props: {
      header: 'image list main'
    },
  },
  {
    id: 3,
    component: ProductListMain,
    props: {
      header: 'product list main'
    },
  }
]

export default Main
