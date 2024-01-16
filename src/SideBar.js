import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useData } from "./DataContext";

const SideBar = () => {
  const {
    availableProducts,
    setAvailableProducts,

    selectedProductFilters,
    setSelectedProductFilters,

    productFilters,
    setProductFilters,
  } = useData();

  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    getFilterOptions(availableProducts, productFilters);
  }, [availableProducts, productFilters]);

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
  return <Container>SideBar</Container>;
};

export default SideBar;
