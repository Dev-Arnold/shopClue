import React from 'react'

const ProductImage = ({product}) => {
  return (
    <div className=' h-[55vh] grid place-items-center'>
      <img src={product.prodImage} className=' w-[70%] h-[300px]'/>
    </div>
  )
}

export default ProductImage