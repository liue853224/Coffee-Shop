import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
const BASE_URL = "http://localhost:3000/api/admin";

const AdminNewProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    type: "coffee-beans",
    roastLevel: "light",
    flavor: "",
    price: "",
    description: "",
    imageURL: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    axios
      .post(`${BASE_URL}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form/data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("上傳成功", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container
      className="my-4"
      style={{
        backgroundColor: "#fcf1e8",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 className="text-center mb-4" style={{ color: "#6f4e37" }}>
        新增產品
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName" className="mb-3">
          <Form.Label>產品名稱</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="輸入產品名稱"
            required
          />
        </Form.Group>

        <Form.Group controlId="productType" className="mb-3">
          <Form.Label>產品類型</Form.Label>
          <Form.Control
            as="select"
            name="type"
            value={product.type}
            onChange={handleChange}
          >
            <option value="coffee-beans">咖啡豆</option>
            <option value="drip-coffee">滴漏咖啡</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="productRoastLevel" className="mb-3">
          <Form.Label>焙度</Form.Label>
          <Form.Control
            as="select"
            name="roastLevel"
            value={product.roastLevel}
            onChange={handleChange}
          >
            <option value="light">淺焙</option>
            <option value="medium">中焙</option>
            <option value="dark">深焙</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="productFlavor" className="mb-3">
          <Form.Label>風味</Form.Label>
          <Form.Control
            type="text"
            name="flavor"
            value={product.flavor}
            onChange={handleChange}
            placeholder="輸入風味描述"
            required
          />
        </Form.Group>

        <Form.Group controlId="productPrice" className="mb-3">
          <Form.Label>價格</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="輸入產品價格"
            required
          />
        </Form.Group>

        <Form.Group controlId="productDescription" className="mb-3">
          <Form.Label>產品描述</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="輸入產品描述"
            rows={3}
            required
          />
        </Form.Group>

        <Form.Group controlId="productImageUrl" className="mb-3">
          <Form.Label>上傳照片</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            style={{
              backgroundColor: "#6f4e37",
              border: "none",
              padding: "10px 20px",
            }}
          >
            新增產品
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AdminNewProductPage;
