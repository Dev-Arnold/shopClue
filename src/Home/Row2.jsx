import React, { useEffect, useState } from 'react';

import ProductRowDisplay from './ProductRowDisplay';

function Row2() {
  const [products, setProducts] = useState(null);
 

  useEffect(() => {
    // Fetch data from Branded.json
    fetch("./Branded.json")
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
    <div className=" w-[95%] md:w-[90%] relative pb-2 ">
      <ProductRowDisplay products={products} textDeal="Branded Deals"/>
    </div>
  );
}

export default Row2;
