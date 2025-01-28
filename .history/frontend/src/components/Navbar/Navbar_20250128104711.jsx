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




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Avatar } from "@nextui-org/react";

import Logo from "../../assets/logo/step-solutions-logo.jpg";

const Navbar = () => {
  const [date, setDate] = useState(""); // สำหรับวันที่
  const [time, setTime] = useState(""); // สำหรับเวลา

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = [
        "อาทิตย์",
        "จันทร์",
        "อังคาร",
        "พุธ",
        "พฤหัสบดี",
        "ศุกร์",
        "เสาร์",
      ];
      const months = [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
      ];
      const day = days[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear() + 543; // แปลงปี ค.ศ. เป็น พ.ศ.
      const currentTime = now.toLocaleTimeString("th-TH", {
        hour12: false, // แสดงเวลาในรูปแบบ 24 ชั่วโมง
      });

      setDate(`${day}, ${date} ${month} ${year}`);
      setTime(currentTime);
    };

    updateDateTime(); // อัปเดตทันทีเมื่อโหลด
    const interval = setInterval(updateDateTime, 1000); // อัปเดตทุกวินาที

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
        {/* แสดงวันที่ */}
        <div className="date-column me-3">
          <p className="date-text mb-0">{date}</p>
        </div>
        {/* แสดงเวลา */}
        <div className="time-column me-3">
          <p className="time-text mb-0">{time}</p>
        </div>
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

