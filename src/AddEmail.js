import React, { useState } from "react";
import { useData } from "./DataContext";
import { Button, Container, Form } from "react-bootstrap";

const AddEmail = () => {
  const { availableItems, setAvailableItems } = useData();
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAvailableItems = [...availableItems, inputValue];
    setAvailableItems(newAvailableItems);
    setInputValue("");
  };

  return (
    <Container className="box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter new email"
            name="email"
            value={inputValue}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ margin: "10px" }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmail;
