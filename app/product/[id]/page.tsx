import React from 'react'

interface ProductProp {
    params: {id: string}
}

const ProductDetail = ({params: {id}}:ProductProp) => {
  return (
    <div>ProductDetail {id}</div>
  )
}

export default ProductDetail;