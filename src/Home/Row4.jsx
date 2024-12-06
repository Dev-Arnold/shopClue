import React, { useEffect, useState } from 'react'
import ProductRowDisplay from './ProductRowDisplay';

function Row4() {
    const [products, setProducts] = useState(null);
 

    useEffect(() => {
      fetch("./Mens.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch products.");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

  return (
    <div className=' w-[95%] md:w-[90%] relative'>
      <ProductRowDisplay products={products} textDeal="Men's Clothing"/>
    </div>
  )
}

export default Row4