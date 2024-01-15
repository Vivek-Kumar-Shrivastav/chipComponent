// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const initialState = {
  selectedChips: ["mia.miller@example.com"],
  availableItems: [
    "alice.smith@example.com",
    "john.doe@example.com",
    "emily.jones@example.com",
    "charlie.williams@example.com",
    "olivia.johnson@example.com",
    "daniel.smith@example.com",
    "sophia.davis@example.com",
    "ethan.miller@example.com",
    "ava.wilson@example.com",
    "william.anderson@example.com",
    "emma.martin@example.com",
    "james.thompson@example.com",
    "mia.jackson@example.com",
    "noah.white@example.com",
    "isabella.harris@example.com",
    "liam.martin@example.com",
    "ella.taylor@example.com",
    "logan.moore@example.com",
    "avery.jones@example.com",
    "lucas.miller@example.com",
    "harper.anderson@example.com",
    "mia.johnson@example.com",
    "ethan.smith@example.com",
    "olivia.moore@example.com",
    "liam.jones@example.com",
    "emma.taylor@example.com",
    "noah.harris@example.com",
    "ava.wilson@example.com",
    "james.anderson@example.com",
    "sophia.davis@example.com",
    "william.anderson@example.com",
    "ella.smith@example.com",
    "logan.martin@example.com",
    "avery.taylor@example.com",
  ],
};

export const DataProvider = ({ children }) => {
  const [selectedChips, setSelectedChips] = useState(
    initialState.selectedChips
  );
  const [availableItems, setAvailableItems] = useState(
    initialState.availableItems
  );

  return (
    <DataContext.Provider
      value={{
        selectedChips,
        setSelectedChips,
        availableItems,
        setAvailableItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
