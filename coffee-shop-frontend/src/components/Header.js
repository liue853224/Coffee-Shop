import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    console.log(userData);
  }, []);

  const handleLogout = () => {
    // 清除 localStorage 中的 token 和 user 資料
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // 更新狀態
    navigate("/"); // 登出後導向首頁或登入頁面
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Row className="w-100">
          <Col md={4} className="d-flex align-items-center">
            <Navbar.Brand
              href="/"
              className="fs-3 fw-bold"
              style={{ color: "#ffbb66" }}
            >
              覓，豆
            </Navbar.Brand>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="/"
                  className="mx-2"
                  style={{ color: "#ffbb66", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffaa44")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffbb66")}
                >
                  咖啡豆
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className="mx-2"
                  style={{ color: "#ffbb66", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffaa44")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffbb66")}
                >
                  關於我們
                </Nav.Link>
                <Nav.Link
                  href="/favorite"
                  className="mx-2"
                  style={{ color: "#ffbb66", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffaa44")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffbb66")}
                >
                  收藏清單
                </Nav.Link>
                <Nav.Link
                  href="/cart"
                  className="mx-2"
                  style={{ color: "#ffbb66", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffaa44")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffbb66")}
                >
                  購物車
                </Nav.Link>
                <Nav.Link
                  href="/feedback"
                  className="mx-2"
                  style={{ color: "#ffbb66", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffaa44")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffbb66")}
                >
                  意見回饋
                </Nav.Link>
                {user && user.isAdmin ? (
                  <>
                    <Nav.Link
                      href="/admin/products"
                      className="mx-2"
                      style={{ color: "#ffbb66", whiteSpace: "nowrap" }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffaa44")}
                      onMouseLeave={(e) => (e.target.style.color = "#ffbb66")}
                    >
                      後台管理
                    </Nav.Link>
                  </>
                ) : null}
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col
            md={{ span: 2, offset: 1 }}
            className="d-flex justify-content-end align-items-center"
          >
            {user ? (
              <>
                <span className="text-light me-3">你好, {user.name}</span>
                <Button
                  variant="outline-light"
                  onClick={handleLogout}
                  className="px-4"
                  style={{
                    borderColor: "#ffaa44",
                    color: "#ffaa44",
                    backgroundColor: "#333333",
                    fontWeight: "bold",
                  }}
                >
                  登出
                </Button>
              </>
            ) : (
              <Button
                variant="outline-light"
                as={Link}
                to="/login"
                className="px-4"
                style={{
                  borderColor: "#ffaa44",
                  color: "#ffaa44",
                  backgroundColor: "#333333",
                  fontWeight: "bold",
                }}
              >
                登入
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default Header;
