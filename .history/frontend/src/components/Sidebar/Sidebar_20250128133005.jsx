// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import DashboardIcon from "@mui/icons-material/Dashboard";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <h2>STEP SOLUTIONS</h2>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <Link to="/" className="menu-item">
//           <DashboardIcon />
//             <i className="bi bi-grid"></i> Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/camera" className="menu-item">
//             <i className="bi bi-camera"></i> Camera
//           </Link>
//         </li>
//         <li>
//           <Link to="/connectivity" className="menu-item">
//             <i className="bi bi-wifi"></i> Connectivity
//           </Link>
//         </li>
//         <li>
//           <Link to="/settings" className="menu-item">
//             <i className="bi bi-gear"></i> Settings
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SensorsIcon from "@mui/icons-material/Sensors";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // ค่าเริ่มต้นเป็น "dashboard"

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // อัปเดตเมนูที่ถูกเลือก
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>STEP SOLUTIONS</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link
            to="/"
            className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={() => handleMenuClick("dashboard")}
          >
            <DashboardIcon />
            <i className="bi bi-grid"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/camera"
            className={`menu-item ${activeMenu === "camera" ? "active" : ""}`}
            onClick={() => handleMenuClick("camera")}
          >
            <i className="bi bi-camera"></i> Camera
          </Link>
        </li>
        <li>
          <Link
            to="/sensors"
            className={`menu-item ${activeMenu === "sensors" ? "active" : ""}`}
            onClick={() => handleMenuClick("sensors")}
          >
            <SensorsIcon />
            <i className="bi bi-wifi"></i> Sensors
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={`menu-item ${activeMenu === "settings" ? "active" : ""}`}
            onClick={() => handleMenuClick("settings")}
          >
            <i className="bi bi-gear"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
