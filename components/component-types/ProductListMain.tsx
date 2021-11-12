import React from 'react'

interface Props {
  props: {
    header: string
  }
}

const ProductListMain = ({ props } : Props) => {
  return (
    <div>
      {props.header}
    </div>
  )
}

export default ProductListMain
