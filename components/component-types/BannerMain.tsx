import React from 'react'

interface Props {
  message: string
}

const BannerMain = ({ message }: Props) => {
  return (
    <div>
      banner main: {message}
    </div>
  )
}

export default BannerMain
