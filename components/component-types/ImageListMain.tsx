import React from 'react'
import Image from 'next/image'
import { css } from '@emotion/css'

interface Props {
  props: any
}

const ImageListMain = ({ props }: Props) => {
  return (
    <div>
      <span style={props.style.header}>
        {props.isHeaderActive && props.header}
      </span>
      <div className="main-image">
        {props.mainImageList.map((image: any) =>
        <div key={image.id}>
          <a href={image.link}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt="main image"
            />
          </a>
        </div>
        )}
      </div>
      <div className="product-container">
          {props.productList.map((product: any) => 
          <div key={product.id} className={productStyle}>
            <a href={product.link}>
              <Image
                src={product.image.src}
                width={product.image.width}
                height={product.image.height}
                alt="image"
              />
            </a>
          </div>
          )}
      </div>
    </div>
  )
}

const productStyle = css`
  display: flex;
`

export default ImageListMain
