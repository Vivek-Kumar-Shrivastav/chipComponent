import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import ProductBody from "../components/ProductBody";

import { useData } from "../utils/DataContext";
import ProductChipList from "../components/ProductChipList";
import { Link } from "react-router-dom";

const Product = () => {
  const { availableProducts, productFilters } = useData();

  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProductList, setFilteredProductList] =
    useState(availableProducts);

  useEffect(() => {
    getFilterOptions(availableProducts, productFilters);
  }, [availableProducts, productFilters]);

  useEffect(() => {
    const filteredProducts = filterProductsBySelectedFilters(
      availableProducts,
      selectedFilters
    );
    setFilteredProductList(filteredProducts);
  }, [availableProducts, selectedFilters]);

  function getFilterOptions(products, filters) {
    const filterOptionsList = {};

    filters.forEach((filter) => {
      // Collect unique values for each filter
      const uniqueValues = [
        ...new Set(products.map((product) => product[filter])),
      ];
      filterOptionsList[filter] = uniqueValues;
    });
    setFilterOptions(filterOptionsList);
  }

  const handleOptionClick = (filter, option) => {
    // Check if the selected filter already exists in the list

    const filterExists = selectedFilters.some((selectedFilter) => {
      return selectedFilter.filter === filter;
    });

    if (filterExists) {
      // Update the existing filter option
      const updatedFilters = selectedFilters.map((selectedFilter) => {
        if (selectedFilter.filter === filter) {
          return { filter, option };
        }
        return selectedFilter;
      });
      setSelectedFilters(updatedFilters);
    } else {
      // Add a new filter option
      setSelectedFilters([...selectedFilters, { filter, option }]);
    }
  };

  const filterProductsBySelectedFilters = (products, selectedFilters) => {
    return products.filter((product) => {
      return selectedFilters.every(({ filter, option }) => {
        return product[filter] === option;
      });
    });
  };

  const Product = ({ product }) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );

  const handleChipDelete = (deletedItem) => {
    const newFilterList = selectedFilters.filter(({ filter, option }) => {
      console.log(filter, option);
      return option !== deletedItem;
    });
    setSelectedFilters(newFilterList);
  };

  return (
    <div className="box">
      <div className="zepto-header">
        Zepto{" "}
        <Link to="/mail" style={{ color: "white" }}>
          Link to Initial Assignment
        </Link>
      </div>
      <Row style={{ marginTop: "10px" }}>
        <Col sm={12} md={4} lg={2} xl={2}>
          <SideBar
            filterOptions={filterOptions}
            onOptionClick={handleOptionClick}
          />
        </Col>
        <Col sm={12} md={8} lg={10} xl={10}>
          {selectedFilters.length !== 0 && (
            <Row>
              <ProductChipList
                selectedFilters={selectedFilters}
                handleChipDelete={handleChipDelete}
              />
            </Row>
          )}
          <Row>
            <ProductBody filteredProductList={filteredProductList} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
