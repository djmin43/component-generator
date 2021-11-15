import React from 'react'

interface Props {
  props: any
}

const BannerMain = ({ props }: Props) => {
  return (
    <div>
      { props.header }
    </div>
  )
}



export default BannerMain
