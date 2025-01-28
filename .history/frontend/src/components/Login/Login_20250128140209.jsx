import React, { useState } from "react";
import { Card, CardBody, CardFooter, Button, Input, Text, Avatar } from "@nextui-org/react";
import { Lock, User } from "lucide-react"; // ไอคอนสำหรับฟอร์ม
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // ตรวจสอบฟิลด์ว่าง
    if (!username || !password) {
      alert("กรุณากรอก Username และ Password");
      return;
    }

    // ส่งคำขอเข้าสู่ระบบ
    console.log("Login:", { username, password });
  };

  return (
    <div className="login-container">
      <Card className="login-card" shadow="lg" radius="lg">
        {/* ส่วนหัวของ Card */}
        <div className="login-header">
          <Avatar
            src="https://source.unsplash.com/featured/?user"
            size="xl"
            isBordered
            color="gradient"
          />
          <Text h3 className="login-title">
            Welcome Back
          </Text>
          <Text className="login-subtitle">Please login to your account</Text>
        </div>

        {/* ฟอร์มสำหรับ Login */}
        <CardBody className="login-form">
          <Input
            size="lg"
            placeholder="Username"
            startContent={<User />}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            size="lg"
            type="password"
            placeholder="Password"
            startContent={<Lock />}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>

        {/* ปุ่มเข้าสู่ระบบ */}
        <CardFooter className="login-footer">
          <Button
            size="lg"
            color="primary"
            radius="lg"
            onPress={handleLogin}
            className="login-button"
          >
            Login
          </Button>
          <Text size="sm" className="signup-text">
            Don't have an account? <a href="/signup">Sign up</a>
          </Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
