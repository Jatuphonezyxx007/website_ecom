import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost", // แก้ไขให้เป็นค่าจริง
  user: "root",
  password: "",
  database: "website",
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [rows] = await pool.query("SELECT id, name, created_at, img_cate FROM categories");
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
