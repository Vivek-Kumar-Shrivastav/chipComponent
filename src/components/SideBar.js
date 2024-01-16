import { Dropdown } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";

const SideBar = ({ filterOptions, onOptionClick }) => {
  return (
    <Container>
      {
        <div className="option-box">
          {Object.entries(filterOptions).map(([filter, options]) => (
            <div key={filter} style={{ marginBottom: "15px" }}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {filter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {options.map((option, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => onOptionClick(filter, option)}
                    >
                      {option.toString()}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </div>
      }
    </Container>
  );
};

export default SideBar;
