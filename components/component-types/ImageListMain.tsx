import React from 'react'

interface Props {
  message: string
}

const ImageListMain = ({ message }: Props) => {
  return (
    <div>
      image list main: {message}
    </div>
  )
}

export default ImageListMain
