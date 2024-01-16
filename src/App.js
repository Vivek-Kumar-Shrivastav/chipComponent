import React from "react";
import Mail from "./Mail";
import Product from "./Product";
import { useData, DataProvider } from "./DataContext";

const App = () => {
  return (
    <DataProvider>
      <div>
        <Mail />
        <Product />
      </div>
    </DataProvider>
  );
};

export default App;
