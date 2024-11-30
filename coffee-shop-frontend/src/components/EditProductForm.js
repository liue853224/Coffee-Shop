import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:3000/api";

const EditProductForm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    name: "",
    type: "coffee-beans",
    roastLevel: "light",
    flavor: "",
    price: 0,
    rating: 0,
    description: "",
    imageUrl: "",
  });
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((response) => {
        setProduct(response.data.data);
        console.log("產品資料在這", response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>產品名稱</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formType">
          <Form.Label>產品類型</Form.Label>
          <Form.Control
            as="select"
            name="type"
            value={product.type || "coffee-beans"}
            onChange={handleChange}
            required
          >
            <option value="coffee-beans">咖啡豆</option>
            <option value="drip-coffee">滴漏咖啡</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formRoastLevel">
          <Form.Label>烘焙程度</Form.Label>
          <Form.Control
            as="select"
            name="roastLevel"
            value={product.roastLevel || "light"}
            onChange={handleChange}
            required
          >
            <option value="light">淺焙</option>
            <option value="medium">中焙</option>
            <option value="dark">深焙</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formFlavor">
          <Form.Label>風味</Form.Label>
          <Form.Control
            type="text"
            name="flavor"
            value={product.flavor || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>價格</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price || 300}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>描述</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImageUrl">
          <Form.Label>上傳圖片</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          提交
        </Button>
      </Form>
    </div>
  );
};

export default EditProductForm;
