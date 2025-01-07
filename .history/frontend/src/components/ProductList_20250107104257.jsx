// // import React, { useEffect, useState } from "react";
// // import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);

// //   // ฟังก์ชันดึงข้อมูลจาก API
// //   useEffect(() => {
// //     fetch("http://localhost:3000/api/products") // เชื่อมต่อ API backend
// //       .then((response) => response.json())
// //       .then((data) => setProducts(data))
// //       .catch((error) => console.error("Error fetching products:", error));
// //   }, []);

// //   return (
// //     <>
// //     <div className="container flex gap-8">
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Product List</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="border rounded-lg p-4 shadow hover:shadow-lg transition"
// //           >
// // <img
// //   src={`/products${product.image_path}` || "https://via.placeholder.com/500x500"}
// //   alt={product.name}
// //   className="w-full h-48 object-cover rounded-lg shadow-md"
// // />

// //             <h2 className="text-lg font-semibold">{product.name}</h2>
// //             <p className="text-sm text-gray-500">{product.category_name}</p>
// //             <p className="font-bold text-lg mt-2">฿{product.price}</p>
// //             <p className="text-sm text-gray-700 mt-1">{product.screen_size}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //     </div>
// //     </>
// //   );

// // };

// // export default ProductList;


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
//       <div className="container flex flex-col gap-8">
//       <div className="w-1/4 p-4 border rounded shadow-md bg-white">
//                     <h3 className="text-xl font-bold mb-4">Filter Products</h3>
//                     <form>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">Category</label>
//                             <select className="w-full border rounded px-3 py-2">
//                                 <option value="">All Categories</option>
//                                 <option value="Category1">Category 1</option>
//                                 <option value="Category2">Category 2</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">Price Range</label>
//                             <div className="flex gap-2">
//                                 <input
//                                     type="number"
//                                     className="w-1/2 border rounded px-3 py-2"
//                                     placeholder="Min"
//                                 />
//                                 <input
//                                     type="number"
//                                     className="w-1/2 border rounded px-3 py-2"
//                                     placeholder="Max"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">Status</label>
//                             <select className="w-full border rounded px-3 py-2">
//                                 <option value="">All Statuses</option>
//                                 <option value="In Stock">In Stock</option>
//                                 <option value="Out of Stock">Out of Stock</option>
//                             </select>
//                         </div>
//                         <button
//                             type="button"
//                             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                         >
//                             Apply Filters
//                         </button>
//                     </form>
//                 </div>

//       <div className="w-3/4">
//         {/* <div className="p-6"> */}
//           <h1 className="text-2xl font-bold mb-4">Product List</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <Card
//                 key={product.id}
//                 isPressable
//                 shadow="sm"
//                 onPress={() => console.log("item pressed")}
//                 className="max-w-full bg-white rounded-lg hover:shadow-lg transition-all"
//               >
//                 <CardBody className="overflow-hidden p-0">
//                   <Image
//                     alt={product.name}
//                     className="w-full object-cover h-64 rounded-lg shadow-md"
//                     src={`/products${product.image_path}` || "https://via.placeholder.com/500x500"}
//                     width="100%"
//                     height="100%"
//                     radius="lg"
//                   />
//                 </CardBody>
//                 <CardFooter className="text-small justify-between p-4">
//                   <div>
//                     <h2 className="text-lg font-semibold">{product.name}</h2>
//                     <p className="text-sm text-gray-500">{product.category_name}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-bold text-lg">฿{product.price}</p>
//                     <p className="text-sm text-gray-700">{product.screen_size}</p>
//                   </div>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductList;




import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import './ProductList.css'; // นำเข้าไฟล์ CSS

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
      <div className="product-list-container">
        <div className="filter-sidebar">
          <h3 className="text-xl font-bold mb-4">Filter Products</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full border rounded px-3 py-2">
                <option value="">All Categories</option>
                <option value="Category1">Category 1</option>
                <option value="Category2">Category 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="w-1/2 border rounded px-3 py-2"
                  placeholder="Min"
                />
                <input
                  type="number"
                  className="w-1/2 border rounded px-3 py-2"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Status</label>
              <select className="w-full border rounded px-3 py-2">
                <option value="">All Statuses</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <button
              type="button"
              className="apply-filters-btn"
            >
              Apply Filters
            </button>
          </form>
        </div>

        <div className="product-grid">
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          <div className="grid-container">
            {products.map((product) => (
              <Card
  key={product.id}
  isPressable
  shadow="sm"
  onPress={() => console.log("item pressed")}
  className="product-card"
>
  <CardBody className="overflow-hidden p-0">
    <Image
      alt={product.name}
      className="product-image"
      src={`/products${product.image_path}` || "https://via.placeholder.com/500x500"}
      width="100%"
      height="100%" // เปลี่ยนให้ความสูงเป็นเต็ม
      radius="lg"
    />
  </CardBody>

  <CardFooter className="text-small p-4 flex flex-col items-center justify-between">
    <div className="product-details text-center">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">฿{product.price.toLocaleString()}</p>
      <p className="product-category">{product.category_name}</p>
    </div>

    <div className="product-status mt-2">
      <p className={`status-badge ${product.status === "in_stock" ? "in-stock" : "out-of-stock"}`}>
        {product.status === "in_stock" ? "In Stock" : "Out of Stock"}
      </p>
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
