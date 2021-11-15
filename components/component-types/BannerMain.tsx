import React from 'react'

interface Props {
  props: {
    header: string,
  }
}

const BannerMain = ({ props }: Props) => {
  return (
    <div>
      carousel
      header
      { props.header }
    </div>
  )
}

export default BannerMain
