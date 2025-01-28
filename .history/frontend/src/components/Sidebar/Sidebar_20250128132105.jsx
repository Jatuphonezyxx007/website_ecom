import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>STEP SOLUTIONS</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="menu-item">
          <DashboardIcon />
            {/* <i className="bi bi-grid"></i> Dashboard */}
          </Link>
        </li>
        <li>
          <Link to="/camera" className="menu-item">
            <i className="bi bi-camera"></i> Camera
          </Link>
        </li>
        <li>
          <Link to="/connectivity" className="menu-item">
            <i className="bi bi-wifi"></i> Connectivity
          </Link>
        </li>
        <li>
          <Link to="/settings" className="menu-item">
            <i className="bi bi-gear"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
