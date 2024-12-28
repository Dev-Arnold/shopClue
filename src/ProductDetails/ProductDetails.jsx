import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "./ProductImage";
import ProductDiscription from "./ProductDiscription";

const ProductDetails = () => {
  const { id } = useParams(); // Extract product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from your JSON file or backend
    fetch("/Branded.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
        console.log(product)  
      })  
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-layoutColor h-[60vh] grid place-items-center px-3">
      <div className=" h-[55vh] bg-white w-[90%] grid grid-cols-[40%_60%] gap-4">
        <ProductImage product={product} />
        <ProductDiscription product={product}/>
      </div>
    </div>
  );
};

export default ProductDetails;
