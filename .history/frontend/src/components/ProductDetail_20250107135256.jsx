import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  
  // ดึงข้อมูลรายละเอียดสินค้าจาก API หรือจาก state
  // ใช้ `id` เพื่อนำไปดึงข้อมูลสินค้าเฉพาะ

  return (
    <div>
      <h1>Product Details for {id}</h1>
      {/* แสดงรายละเอียดสินค้า */}
    </div>
  );
};
