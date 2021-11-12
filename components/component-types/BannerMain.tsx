import React from 'react'

interface Props {
  props: {
    header: string
  }
}

const BannerMain = ({ props }: Props) => {
  return (
    <div>
      { props.header }
    </div>
  )
}

export default BannerMain
