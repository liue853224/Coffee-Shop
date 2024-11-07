import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Container, Button } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="md" className="py-3 shadow-sm">
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
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col md={2} className="d-flex justify-content-end align-items-center">
          <Button
            variant="outline-light"
            href="/login"
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
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Header;
