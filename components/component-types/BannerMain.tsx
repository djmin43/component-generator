import React from 'react'

interface Props {
  props: {
    message: string
  }
}

const BannerMain = ({ props }: Props) => {
  return (
    <div>
      banner main: { props.message }
    </div>
  )
}

export default BannerMain
