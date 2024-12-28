import React from 'react'

const ProductDiscription = ({product}) => {
  return (
    <div className=' pt-3'>
      <h1 className=' capitalize font-semibold text-2xl'>{product.prodTitle}</h1>
      <p className=' mt-3'>{product.prodDetails}</p>        
      <p className=' font-bold mt-3'> ₦{product.prodPrice.toLocaleString()}</p>
      <div>
        <button className=' border text-orange-500 border-orange-500 uppercase font-semibold hover:bg-custom-gradient hover:text-white hover:border-black duration-500 py-2 px-4 rounded mt-3 w-[13rem]'>
          Add to Cart
        </button>

      </div>
    </div>
  )
}

export default ProductDiscription