// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import {Avatar} from "@nextui-org/avatar";

// import Logo from "../../assets/logo/step-solutions-logo.jpg";

// const Navbar = () => {


//     const [dateTime, setDateTime] = useState("");

//     useEffect(() => {
//       // ฟังก์ชันอัปเดตวันและเวลา
//       const updateDateTime = () => {
//         const now = new Date();
//         const options = {
//           weekday: "long",
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         };
//         setDateTime(now.toLocaleDateString("th-TH", options)); // แสดงวันเวลาภาษาไทย
//       };
  
//       updateDateTime();
//       const interval = setInterval(updateDateTime, 1000); // อัปเดตทุก 1 วินาที
  
//       return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกลบ
//     }, []);

    
//     return (
//         <nav className="navbar">
//             <div className="logo">
//                 <Link to="/">
//                 <img src={Logo} alt="Logo" />
//                 </Link>
//             </div>
//             {/* กลุ่มลิงก์และโปรไฟล์ */}
//             <div className="navbar-right">
//             <div className="date-time me-3">{dateTime}</div>

//                 {/* ไอคอนโปรไฟล์ */}
//                 <div className="profile-icon">
//                     <Link to="/profile">
//                     <Avatar isBordered color="danger" src="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Charlie_Puth_-_Publicity_01_-_07-30-19_akni02/charlie-puth-new-single-i-warned-myself-benny-blanco.jpg" alt="Profile" />
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




import React, { useState, useEffect } from "react"; // import useState และ useEffect
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Avatar } from "@nextui-org/react"; // ใช้ Avatar จาก NextUI

import Logo from "../../assets/logo/step-solutions-logo.jpg";

const Navbar = () => {
  const [dateTime, setDateTime] = useState(""); // สร้าง state สำหรับจัดเก็บวันและเวลา

  useEffect(() => {
    // ฟังก์ชันอัปเดตวันและเวลา
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setDateTime(now.toLocaleDateString("th-TH", options)); // แสดงวันเวลาภาษาไทย
    };

    updateDateTime(); // เรียกครั้งแรกตอน mount
    const interval = setInterval(updateDateTime, 1000); // อัปเดตทุก 1 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
  }, []);

  return (
    <nav className="navbar">
      {/* โลโก้ */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* กลุ่มลิงก์และโปรไฟล์ */}
      <div className="navbar-right d-flex align-items-center">
        {/* แสดงวันและเวลา */}
        <div className="date-time me-3">{dateTime}</div>

        {/* ไอคอนโปรไฟล์ */}
        <div className="profile-icon">
          <Link to="/profile">
            <Avatar
              isBordered
              color="danger"
              src="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Charlie_Puth_-_Publicity_01_-_07-30-19_akni02/charlie-puth-new-single-i-warned-myself-benny-blanco.jpg"
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
