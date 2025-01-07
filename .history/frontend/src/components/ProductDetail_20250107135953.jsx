import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // นำเข้า useParams

const ProductDetail = () => {
  const { id } = useParams(); // ดึงค่า id จาก URL
  const [product, setProduct] = useState(null);

  // ฟังก์ชันดึงข้อมูลสินค้าจาก API ตาม id
  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`) // API สำหรับดึงข้อมูลสินค้าตาม id
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]); // useEffect จะทำงานเมื่อ id เปลี่ยน

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={`/products${product.image_path}`} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
