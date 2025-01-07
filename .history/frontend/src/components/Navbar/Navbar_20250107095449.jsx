import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import {Avatar} from "@nextui-org/avatar";

const Navbar = () => {

    
    return (
        <nav className="navbar">
            <div className="logo">
            </div>
            {/* กลุ่มลิงก์และโปรไฟล์ */}
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                {/* ไอคอนโปรไฟล์ */}
                <div className="profile-icon">
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
