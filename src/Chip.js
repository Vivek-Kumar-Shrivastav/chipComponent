import React from "react";
import { useData } from "./DataContext";

const Chip = ({ item, allowDelete }) => {
  const { selectedChips, setSelectedChips, availableItems, setAvailableItems } =
    useData();

  const handleChipDelete = (deletedItem) => {
    setSelectedChips(
      selectedChips.filter((chipItem) => chipItem !== deletedItem)
    );
    setAvailableItems([...availableItems, deletedItem]);
  };

  return (
    <div className="chip">
      <div className="chip-head">{item.charAt(0).toUpperCase()}</div>
      <div className="chip-content">{item}</div>
      {allowDelete && (
        <div
          className="chip-close"
          onClick={() => {
            handleChipDelete(item);
          }}
        >
          <svg
            className="chip-svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Chip;
