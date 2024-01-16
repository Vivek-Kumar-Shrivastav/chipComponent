import React from "react";
import Chip from "./Chip";

const ProductChipList = ({ selectedFilters, handleChipDelete }) => {
  return (
    <div className="box">
      {selectedFilters.map((filter, index) => (
        <Chip
          key={index}
          name={filter.option}
          item={`${filter.filter}: ${filter.option}`}
          allowDelete={true}
          handleChipDelete={handleChipDelete}
        />
      ))}
    </div>
  );
};

export default ProductChipList;
