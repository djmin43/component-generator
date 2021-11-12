import React from 'react'

interface Props {
  message: string
}

const ProductListMain = ({ message } : Props) => {
  return (
    <div>
      product list main: {message}
    </div>
  )
}

export default ProductListMain
