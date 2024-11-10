import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 發送登入請求到後端
      const response = await axios.post(`${BASE_URL}/signin`, {
        email,
        password,
      });
      console.log(response.data);
      // 登入成功，處理返回的資料
      const { token, user } = response.data.data;
      localStorage.setItem("token", token); // 儲存 JWT 到 localStorage
      localStorage.setItem("user", JSON.stringify(user)); // 儲存用戶資料
      // 跳轉到主頁
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "登入失敗，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center">登入</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>電子郵件</Form.Label>
              <Form.Control
                type="email"
                placeholder="輸入電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>密碼</Form.Label>
              <Form.Control
                type="password"
                placeholder="輸入密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-4"
              disabled={loading}
              style={{
                backgroundColor: "#ba6b0b",
                border: "2px none black",
                whiteSpace: "nowrap",
              }}
            >
              {loading ? "登入中..." : "登入"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
