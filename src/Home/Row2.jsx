// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";


// function Row2() {
//   const [products, setProducts] = useState(null);
//   const [startIndex, setStartIndex] = useState(0); // Starting index for the displayed products

//   useEffect(() => {
//     // Fetching the data from the public folder
//     fetch("./Branded.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setProducts(data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // Handle Next button click
//   const handleNext = () => {
//     if (products && startIndex + 6 < products.length) {
//       setStartIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   // Handle Previous button click
//   const handlePrevious = () => {
//     if (startIndex > 0) {
//       setStartIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   return (
//     <div className=" w-[90%] mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-2">Branded Deals</h1>
//       <div className="min-h-[30vh] bg-white shadow-md flex overflow-hidden gap-1 relative">
//         {products &&
//           products
//             .slice(startIndex, startIndex + 6) // Display only 6 products at a time
//             .map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//         <div className="mt-4 absolute w-full flex top-[30%] justify-between">
//             <button
//               className="bg-iconColor text-white font-semibold px-2 py-2 rounded disabled:cursor-not-allowed hover:bg-blue-700 transition"
//               disabled={startIndex < 0}
//               onClick={handlePrevious}
//             >
//               <IoIosArrowBack />
//             </button>
//           {products &&
//             startIndex + 6 < products.length && ( 
//               <button
//                 className="bg-iconColor text-white font-semibold px-2 py-5 rounded hover:bg-blue-700 transition"
//                 onClick={handleNext}
//               >
//                 <IoIosArrowForward />
//               </button>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Row2;

// new 

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
    <div className=" w-[90%] relative pb-2 ">
      <ProductRowDisplay products={products} textDeal="Branded Deals"/>
    </div>
  );
}

export default Row2;
