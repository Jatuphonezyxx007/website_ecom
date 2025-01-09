// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // นำเข้า useParams
// import './ProductDetail.css';

// const ProductDetail = () => {
//   const { id } = useParams(); // ดึงค่า id จาก URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3000/api/products/${id}`) // API สำหรับดึงข้อมูลสินค้าตาม id
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Product not found");
//         }
//         return response.json();
//       })
//       .then((data) => setProduct(data))
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [id]);
  
//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="">
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <p>{product.price}</p>
//       <img src={`/products${product.image_path}`} alt={product.name} />
//     </div>
//   );
// };

// export default ProductDetail;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // นำเข้า useParams
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // ดึงค่า id จาก URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`) // API สำหรับดึงข้อมูลสินค้าตาม id
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <div className="text-center text-xl font-bold mt-10">Loading...</div>;

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* รูปภาพสินค้า */}
      <div className="md:w-8/12 flex justify-center items-center">
        <div className="zoom-container">
          <img
            src={`/products${product.image_path}`}
            alt={product.name}
            className="rounded-lg shadow-lg object-contain max-w-full h-auto zoom-image"
          />
        </div>
      </div>

      {/* รายละเอียดสินค้า */}
      <div className="md:w-4/12 space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-600">{product.description}</p>
        <p className="text-2xl font-semibold text-primary">{`฿${product.price}`}</p>

        <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
