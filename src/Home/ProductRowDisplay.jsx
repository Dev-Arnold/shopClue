import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function ProductRowDisplay({ products, textDeal }) {
  const [startIndex, setStartIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(6); // Default to 6

  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(5);
      } else {
        setProductsPerPage(6);
      }
    };

    updateProductsPerPage();

    window.addEventListener("resize", updateProductsPerPage);

    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  const handleNext = () => {
    if (products && startIndex + productsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold py-3 ">{textDeal}</h1>
      <div className="sm:flex hidden absolute z-10 w-full top-[40%] justify-between mt-4">
        <button
          onClick={handlePrevious}
          className={`px-2 py-2 bg-iconColor hover:bg-black duration-200 text-white rounded ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className={`px-2 py-5 hover:bg-black duration-200 bg-iconColor text-white rounded ${
            products && startIndex + productsPerPage >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={products && startIndex + productsPerPage >= products.length}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div
        className={`min-h-[30vh] flex bg-yellow-400 ${
          window.innerWidth < 640 ? " w-[300px] overflow-x-auto" : ""
        }`}
      >
        {products ? (
          products
            .slice(startIndex, startIndex + productsPerPage) // Display based on dynamic productsPerPage
            .map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
        ) : (
          <p className="text-white">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default ProductRowDisplay;