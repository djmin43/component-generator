import React from 'react'
import Image from 'next/image'

interface Props {
  props: any
}

const ImageListMain = ({ props }: Props) => {
  return (
    <div>
      <span style={props.style.header}>{props.header}</span>
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
    </div>
  )
}

export default ImageListMain
