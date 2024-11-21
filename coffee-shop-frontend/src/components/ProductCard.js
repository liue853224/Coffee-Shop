import React from "react";
import { Card, Button } from "react-bootstrap";

const BASE_URL = "http://localhost:3000";

const ProductCard = ({ name, roastLevel, price, description, imageUrl }) => {
  const fullImageUrl = `${BASE_URL}${imageUrl}`;

  return (
    <Card
      className="mb-4 shadow-sm"
      style={{
        backgroundColor: "#fcf1e8",
      }}
    >
      <Card.Img variant="top" src={fullImageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          焙度: {roastLevel}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-primary">單價: ${price}</Card.Text>
        <Button
          style={{
            backgroundColor: "#ffaa44",
            border: "2px solid #ffaa44",
            whiteSpace: "nowrap",
          }}
        >
          加入收藏
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
