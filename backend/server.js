const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());

// การตั้งค่าการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: "localhost", // แก้ไขเป็น host ของคุณ
  user: "root", // แก้ไขเป็น username ของคุณ
  password: "", // แก้ไขเป็น password ของคุณ
  database: "website", // แก้ไขเป็นชื่อฐานข้อมูลของคุณ
});

// ทดสอบการเชื่อมต่อฐานข้อมูล
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to the database.");
});

// คำสั่ง SQL สำหรับดึงข้อมูลสินค้า
const sql = `
SELECT 
    p.id,
    p.name,
    pd.installation_type,
    pd.screen_size,
    pd.resolution,
    pd.brightness,
    p.price,
    p.status,
    pi.image_path,
    c.name AS category_name
FROM 
    products p
INNER JOIN 
    product_details pd ON p.id = pd.product_id
INNER JOIN
    categories c ON p.category_id = c.id
LEFT JOIN 
    product_images pi ON p.id = pi.product_id AND pi.is_main = 1
`;

// API สำหรับดึงข้อมูลสินค้า
app.get("/api/products", (req, res) => {
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("An error occurred while fetching products.");
      return;
    }
    res.json(results);
  });
});

// เปิดเซิร์ฟเวอร์
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");

// const app = express();
// app.use(cors());

// // การตั้งค่าการเชื่อมต่อฐานข้อมูล
// const db = mysql.createConnection({
//   host: "localhost", // แก้ไขเป็น host ของคุณ
//   user: "root", // แก้ไขเป็น username ของคุณ
//   password: "", // แก้ไขเป็น password ของคุณ
//   database: "website", // แก้ไขเป็นชื่อฐานข้อมูลของคุณ
// });

// // ทดสอบการเชื่อมต่อฐานข้อมูล
// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//     return;
//   }
//   console.log("Connected to the database.");
// });

// // คำสั่ง SQL สำหรับดึงข้อมูลสินค้า
// const sqlProducts = `
//   SELECT 
//     p.id,
//     p.name,
//     pd.installation_type,
//     pd.screen_size,
//     pd.resolution,
//     pd.brightness,
//     p.price,
//     p.status,
//     pi.image_path,
//     c.name AS category_name
//   FROM 
//     products p
//   INNER JOIN 
//     product_details pd ON p.id = pd.product_id
//   INNER JOIN
//     categories c ON p.category_id = c.id
//   LEFT JOIN 
//     product_images pi ON p.id = pi.product_id AND pi.is_main = 1
// `;

// // คำสั่ง SQL สำหรับดึงข้อมูลหมวดหมู่
// const sqlCategories = "SELECT id, name FROM categories";

// // API สำหรับดึงข้อมูลสินค้าและหมวดหมู่
// app.get("/api/products-and-categories", (req, res) => {
//   // ดึงข้อมูลทั้งสินค้าและหมวดหมู่พร้อมกัน
//   db.query(sqlProducts, (err, productResults) => {
//     if (err) {
//       console.error("Error fetching products:", err);
//       return res.status(500).send("Error fetching products");
//     }
//     db.query(sqlCategories, (err, categoryResults) => {
//       if (err) {
//         console.error("Error fetching categories:", err);
//         return res.status(500).send("Error fetching categories");
//       }
//       res.json({ products: productResults, categories: categoryResults });
//     });
//   });
// });

// // เปิดเซิร์ฟเวอร์
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });