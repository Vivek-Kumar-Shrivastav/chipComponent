import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import ProductBody from "./ProductBody";

const Product = () => {
  return (
    <div>
      <div className="zepto-header">Zepto</div>
      <Row>
        <Col sm={12} md={4} lg={2} xl={2}>
          <SideBar />
        </Col>
        <Col sm={12} md={8} lg={10} xl={10}>
          <ProductBody />
        </Col>
      </Row>
    </div>
  );
};

export default Product;
