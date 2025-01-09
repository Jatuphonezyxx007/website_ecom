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




import React, { useState } from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";

const ProductDetail = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");

  const handleImageClick = () => {
    onOpen(); // เปิด Modal เมื่อคลิกที่ภาพ
  };

  return (
    <div className="product-detail">
      <img
        src={`/products${product.image_path}`}
        alt={product.name}
        className="main-image rounded-lg shadow-lg object-contain w-full h-[70vh] max-h-[70vh] cursor-pointer"
        onClick={handleImageClick}
      />

      {/* Modal สำหรับแสดงภาพขยาย */}
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <h2>{product.name}</h2>
          </ModalHeader>
          <ModalBody>
            <div className="modal-image-container">
              <img
                src={`/products${product.image_path}`}
                alt={product.name}
                className="modal-image w-full max-w-[80vw] h-auto"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductDetail;
