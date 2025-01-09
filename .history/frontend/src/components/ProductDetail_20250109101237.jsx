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
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="row">
        {/* ภาพสินค้า */}
        <div className="col-8 product-image">
          <img src={`/products${product.image_path}`} alt={product.name} />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="col-4 product-details">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <button className="buy-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
