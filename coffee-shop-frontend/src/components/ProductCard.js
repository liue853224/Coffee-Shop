import React from "react";
import { Card, Button } from "react-bootstrap";

const BASE_URL = "http://localhost:3000";

const ProductCard = ({ name, roastLevel, price, description, imageUrl }) => {
  const fullImageUrl = `${BASE_URL}${imageUrl}`;

  return (
    <Card
      className="mb-4 shadow-sm"
      style={{
        backgroundColor: "#2c2c2c", // 深灰或黑色背景
        color: "#d4af37", // 金色文字
      }}
    >
      <Card.Img
        variant="top"
        src={fullImageUrl}
        alt={name}
        style={{
          borderBottom: "3px solid #d4af37", // 下方加金色邊框
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          焙度: {roastLevel}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-warning">單價: ${price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            style={{
              backgroundColor: "#d4af37", // 金色背景
              color: "#2c2c2c", // 黑色字體
              border: "2px solid #d4af37", // 金色邊框
              whiteSpace: "nowrap",
            }}
          >
            加入收藏
          </Button>
          <Button
            style={{
              backgroundColor: "#6f4e37", // 深咖啡色背景
              color: "#fff", // 白色文字
              border: "2px solid #6f4e37", // 咖啡色邊框
              whiteSpace: "nowrap",
            }}
          >
            加入購物車
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
