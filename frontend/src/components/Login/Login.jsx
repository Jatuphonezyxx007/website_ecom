import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@nextui-org/react";

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
        <div style={styles.container}>
            {/* Alert Popup */}
            {alert.show && (
                <div style={styles.alert}>
                    <Alert color={alert.color} title={alert.message} closable />
                </div>
            )}

            <form onSubmit={handleLogin} style={styles.form}>
                <h2 className="font-bold" style={styles.title}>เข้าสู่ระบบ</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    form: {
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        width: "300px",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
    },
    button: {
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
    alert: {
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
    },
};

export default Login;
