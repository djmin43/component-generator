import type { NextPage } from 'next'
import Main from '../components/main/Main'
import ControlBar from '../components/control-bar/ControlBar'
import { css } from '@emotion/css'

const Home: NextPage = () => {
  return (
    <div className={mainIndexPageStyle}>
      <Main componentList={componentList} />
      <ControlBar />
    </div>
  )
}

const mainIndexPageStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const componentList = [
  {
    id: 1,
    component: "BannerMain",
    props: {
      header: "banner main",
      imageList: [
        {
          id: "first-image",
          src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          width: 640,
          height: 426,
          link: "https://unsplash.com/photos/3ORoQEJY9LA"
        }
      ]
    }
  },
  {
    id: 2,
    component: "ImageListMain",
    props: {
      header: "즐거운 회사생활",
      mainImageList: [
        {
          id: "first-image",
          src: "https://images.unsplash.com/photo-1558346489-19413928158b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          width: 640,
          height: 426,
          link: "https://unsplash.com/photos/WrueFKpTlQs"
        }
      ],
      productList: [
        {
          id: "first-product",
          link: "https://unsplash.com/photos/xzikohlx4jY",
          mainTitle: "투수는 공을 던진다",
          price: 100,
          discount: 0,
          image: {
            id: "first-image",
            src: "https://images.unsplash.com/photo-1591444539769-2518e73d1090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
            width: 160,
            height: 128,
            link: "https://unsplash.com/photos/WrueFKpTlQs"
          }
        },
        {
          id: "second-product",
          link: "https://unsplash.com/photos/xzikohlx4jY",
          mainTitle: "투수는 공을 던진다",
          price: 100,
          discount: 0,
          image: {
            id: "first-image",
            src: "https://images.unsplash.com/photo-1591444539769-2518e73d1090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
            width: 160,
            height: 128,
            link: "https://unsplash.com/photos/WrueFKpTlQs"
          }
        }
      ],
      style: {
        header: {
          fontSize: "100px",
          color: "green"
        }
      }
    }
  },
  {
    id: 3,
    component: "ProductListMain",
    props: {
      header: "product list main"
    }
  }
];


export default Home
