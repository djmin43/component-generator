import React from 'react'
import Image from 'next/image'

interface Props {
  props: any
}

const BannerMain = ({ props }: Props) => {

  return (
    <div>
      {props.header}
      {props.imageList.map((image: any) => 
      <div key={image.key}>
        <a href={image.link}>
        <Image
          src={image.src}
          alt="image"
          width={image.width}
          height={image.height}
          />
        </a>
      </div> )}
    </div>
  )
}



export default BannerMain
