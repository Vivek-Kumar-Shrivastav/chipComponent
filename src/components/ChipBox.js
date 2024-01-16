import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Chip from "./Chip";
import { useData } from "../utils/DataContext";

const ChipBox = () => {
  const { selectedChips, setSelectedChips, availableItems, setAvailableItems } =
    useData();

  const handleKeyDownPress = (e) => {
    if (
      e.target.value === "" &&
      e.key === "Backspace" &&
      selectedChips.length
    ) {
      if (alreadyHighlighted) {
        const lastElement = selectedChips[selectedChips.length - 1];
        handleChipDelete(lastElement);
        setAlreadyHighlighted(0);
      } else {
        setAlreadyHighlighted(1);
      }
    }
  };

  const [alreadyHighlighted, setAlreadyHighlighted] = useState(0);
  const [filterTerm, setFilterTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(availableItems);
  const handleChipClick = (item) => {
    setSelectedChips([...selectedChips, item]);
    setAvailableItems(availableItems.filter((i) => i !== item));
    setFilterTerm("");
  };

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value;
    setFilterTerm(searchTerm);
    setAlreadyHighlighted(0);
    const filtered =
      availableItems.length === 0
        ? []
        : availableItems.filter((item) => {
            return item.toLowerCase().includes(searchTerm.toLowerCase());
          });
    setFilteredItems(filtered);
  };

  const handleChipDelete = (deletedItem) => {
    setSelectedChips(
      selectedChips.filter((chipItem) => chipItem !== deletedItem)
    );
    setAvailableItems([...availableItems, deletedItem]);
  };

  return (
    <Container className="box">
      <Row>
        {selectedChips.map((item, key) => (
          <Col className="chipCol" key={key} sm={6} md={6} lg={3} xl={3}>
            <div
              style={{ width: "fit-content" }}
              className={
                key === selectedChips.length - 1 &&
                alreadyHighlighted &&
                "highlightDiv"
              }
            >
              <Chip
                item={item}
                name={item}
                key={key}
                allowDelete={true}
                handleChipDelete={handleChipDelete}
              />
            </div>
          </Col>
        ))}
        <Col className="chipCol" sm={6} md={6} lg={3} xl={3}>
          <div className="dropDownBox">
            <input
              type="text"
              className="chipInputText"
              placeholder="Enter your Item"
              name="item"
              value={filterTerm}
              onChange={handleFilterChange}
              onKeyDown={handleKeyDownPress}
            />

            {filterTerm && (
              <div className="dropdown">
                {filteredItems.map((item, key) => (
                  <div
                    key={key}
                    className="dropdown-item"
                    onClick={() => {
                      handleChipClick(item);
                    }}
                  >
                    <Chip
                      name={item}
                      item={item}
                      key={key}
                      allowDelete={false}
                      handleChipDelete={handleChipDelete}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChipBox;
