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



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import SensorsIcon from "@mui/icons-material/Sensors";
// import CameraIcon from "@mui/icons-material/Camera";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [activeMenu, setActiveMenu] = useState("dashboard"); // ค่าเริ่มต้นเป็น "dashboard"

//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu); // อัปเดตเมนูที่ถูกเลือก
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <h2>STEP SOLUTIONS</h2>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <Link
//             to="/"
//             className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
//             onClick={() => handleMenuClick("dashboard")}
//           >
//             <DashboardIcon />
//             <i className="bi bi-grid"></i> Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/cctv"
//             className={`menu-item ${activeMenu === "cctv" ? "active" : ""}`}
//             onClick={() => handleMenuClick("camera")}
//           >
//             <CameraIcon />
//             <i className="bi bi-camera"></i> CCTV
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/sensors"
//             className={`menu-item ${activeMenu === "sensors" ? "active" : ""}`}
//             onClick={() => handleMenuClick("sensors")}
//           >
//             <SensorsIcon />
//             <i className="bi bi-wifi"></i> Sensors
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/settings"
//             className={`menu-item ${activeMenu === "settings" ? "active" : ""}`}
//             onClick={() => handleMenuClick("settings")}
//           >
//             <SettingsIcon />
//             <i className="bi bi-gear"></i> Settings
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/logout"
//             className={`menu-item ${activeMenu === "logout" ? "active" : ""}`}
//             onClick={() => handleMenuClick("logout")}
//           >
//             <LogoutIcon />
//             <i className="bi bi-gear"></i> Log out
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
import CameraIcon from "@mui/icons-material/Camera";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // ค่าเริ่มต้นเป็น "dashboard"

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // อัปเดตเมนูที่ถูกเลือก
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <h2>STEP SOLUTIONS</h2>
      </div>

      {/* Menu Section */}
      <ul className="sidebar-menu">
        <li>
          <Link
            to="/"
            className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={() => handleMenuClick("dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/cctv"
            className={`menu-item ${activeMenu === "cctv" ? "active" : ""}`}
            onClick={() => handleMenuClick("cctv")}
          >
            <CameraIcon />
            CCTV
          </Link>
        </li>
        <li>
          <Link
            to="/sensors"
            className={`menu-item ${activeMenu === "sensors" ? "active" : ""}`}
            onClick={() => handleMenuClick("sensors")}
          >
            <SensorsIcon />
            Sensors
          </Link>
        </li>
      </ul>

      {/* Footer Menu Section */}
      <ul className="sidebar-menu sidebar-footer">
        <li>
          <Link
            to="/settings"
            className={`menu-item ${activeMenu === "settings" ? "active" : ""}`}
            onClick={() => handleMenuClick("settings")}
          >
            <SettingsIcon />
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className={`menu-item ${activeMenu === "logout" ? "active" : ""}`}
            onClick={() => handleMenuClick("logout")}
          >
            <LogoutIcon />
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

