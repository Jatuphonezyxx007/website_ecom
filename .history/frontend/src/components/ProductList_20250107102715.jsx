// import React, { useEffect, useState } from "react";
// import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   // ฟังก์ชันดึงข้อมูลจาก API
//   useEffect(() => {
//     fetch("http://localhost:3000/api/products") // เชื่อมต่อ API backend
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

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

// };

// export default ProductList;


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

  return (
    <>
      <div className="container flex flex-col gap-8">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                isPressable
                shadow="sm"
                onPress={() => console.log("item pressed")}
                className="max-w-full bg-white rounded-lg hover:shadow-lg transition-all"
              >
                <CardBody className="overflow-hidden p-0">
                  <Image
                    alt={product.name}
                    className="w-full object-cover h-64 rounded-lg shadow-md"
                    src={`/products${product.image_path}` || "https://via.placeholder.com/500x500"}
                    width="100%"
                    height="100%"
                    radius="lg"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between p-4">
                  <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-500">{product.category_name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">฿{product.price}</p>
                    <p className="text-sm text-gray-700">{product.screen_size}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
