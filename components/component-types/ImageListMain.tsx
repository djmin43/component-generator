import React from 'react'

interface Props {
  props: any
}

const ImageListMain = ({ props }: Props) => {
  return (
    <div>
      {props.header}
    </div>
  )
}

export default ImageListMain
