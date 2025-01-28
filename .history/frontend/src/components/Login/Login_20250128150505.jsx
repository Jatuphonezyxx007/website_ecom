import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@nextui-org/react";
import "./Login.css"; // นำเข้าไฟล์ CSS

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ show: false, message: "", color: "danger" });
    const navigate = useNavigate();

    // Mock users สำหรับตรวจสอบ
    const mockUsers = [
        { username: "admin", password: "1234" },
        { username: "user1", password: "abcd" },
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        // ตรวจสอบ username และ password กับ mockUsers
        const user = mockUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // Login Success
            onLoginSuccess?.(); // เรียก callback หากมีการส่งมา
            setAlert({ show: true, message: "Login Successful!", color: "success" });
            setTimeout(() => {
                navigate("/dashboard"); // เปลี่ยนไปหน้า Dashboard
            }, 1000);
        } else {
            // Login Failed
            setAlert({ show: true, message: "Invalid Username or Password!", color: "danger" });
            setTimeout(() => setAlert({ show: false }), 5000); // ซ่อน Alert หลัง 5 วินาที
        }
    };

    return (
        <div className="login-container">
            {/* Alert Popup */}
            {alert.show && (
                <div className="alert">
                    <Alert color={alert.color} title={alert.message} closable />
                </div>
            )}

            <form onSubmit={handleLogin} className="login-card">
                <h2 className="login-title">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button type="submit" className="login-footer">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
