import React from 'react'

interface Props {
  props: {
    header: string
  }
}

const ImageListMain = ({ props }: Props) => {
  return (
    <div>
      {props.header}
    </div>
  )
}

export default ImageListMain
