import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ name, roastLevel, price, description }) => (
  <Card className="mb-4 shadow-sm">
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
          border: "2px solid black",
          whiteSpace: "nowrap",
        }}
      >
        加入收藏
      </Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
