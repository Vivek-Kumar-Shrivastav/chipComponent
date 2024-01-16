import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Col } from "react-bootstrap/esm";
const ProductBody = ({ filteredProductList }) => {
  return filteredProductList.map((item) => (
    <Col sm={12} md={6} lg={4} xl={3}>
      <ProductCard data={item} />
    </Col>
  ));
};

export default ProductBody;
