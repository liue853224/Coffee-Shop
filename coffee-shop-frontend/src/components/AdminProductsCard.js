import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminProductsCard = ({ id, name, roastLevel, price, description }) => {
  const navigate = useNavigate();

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
