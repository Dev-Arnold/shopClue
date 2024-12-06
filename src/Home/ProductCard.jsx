import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className=" w-[15rem] bg-white py-3 duration-200 rounded-sm overflow-hidden hover:border hover:border-iconColor hover:shadow-md group">
      <div className="">
        <img
          src={product.prodImage}
          alt={product.prodTitle}
          className="w-[146px] h-[150px] m-auto overflow-clip object-contain duration-200 group-hover:scale-[1.05]"
        />
      </div>
      <div className="p-4">
        <h3 className=" capitalize text-gray-800 truncate">
          {product.prodTitle}
        </h3>
        <div className=" flex items-center ">
          <span className=" text-[0.85rem] font-semibold ">
            ₦{product.prodPrice.toLocaleString()}
          </span>
          <span className="text-gray-500 text-[0.8rem] ml-1 line-through text-sm">
            ₦{product.oldPrice.toLocaleString()}
          </span>
          <span className=" text-iconColor text-xs font-semibold px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
