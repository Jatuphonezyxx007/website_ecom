import React from "react";
import { Card, CardBody, CardFooter, Button, Input, Text } from "@nextui-org/react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Card className="login-card" shadow="lg" radius="lg">
        {/* หัวข้อ */}
        <Text h3 className="login-title">Login</Text>

        {/* ฟอร์มสำหรับ Username และ Password */}
        <CardBody>
          <Input
            placeholder="Username"
            size="lg"
            className="login-input"
          />
          <Input
            type="password"
            placeholder="Password"
            size="lg"
            className="login-input"
          />
        </CardBody>

        {/* ปุ่ม Login */}
        <CardFooter className="login-footer">
          <Button size="lg" color="primary" radius="lg">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
