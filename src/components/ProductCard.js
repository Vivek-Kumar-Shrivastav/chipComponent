import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ data }) => {
  return (
    <>
      <Card className="product-card">
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.brand}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
