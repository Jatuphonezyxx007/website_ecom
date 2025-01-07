import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // ฟังก์ชันดึงข้อมูลจาก API
  useEffect(() => {
    fetch("http://localhost:3000/api/products") // เชื่อมต่อ API backend
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

//   return (
//     <>
//     <div className="container flex gap-8">
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//           >
// <img
//   src={`/products${product.image_path}` || "https://via.placeholder.com/500x500"}
//   alt={product.name}
//   className="w-full h-48 object-cover rounded-lg shadow-md"
// />

//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p className="text-sm text-gray-500">{product.category_name}</p>
//             <p className="font-bold text-lg mt-2">฿{product.price}</p>
//             <p className="text-sm text-gray-700 mt-1">{product.screen_size}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </>
//   );

return (
  <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {list.map((item, index) => (
      <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")} className="max-w-xs sm:max-w-md lg:max-w-lg">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={item.title}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px]" // ปรับขนาดตามที่ต้องการ
            radius="lg"
            shadow="sm"
            src={item.img}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.title}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Card>
    ))}
  </div>
);

};

export default ProductList;
