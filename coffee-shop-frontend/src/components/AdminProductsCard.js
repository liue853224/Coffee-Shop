import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:3000";
const AdminProductsCard = ({
  id,
  name,
  roastLevel,
  price,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();
  const fullImageUrl = `${BASE_URL}${imageUrl}`;
  const handleEdit = () => {
    navigate(`/admin/products/edit/${id}`);
  };
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
          onClick={handleEdit}
          style={{
            backgroundColor: "#ffaa44",
            border: "2px solid #ffaa44",
            whiteSpace: "nowrap",
          }}
        >
          修改
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AdminProductsCard;
