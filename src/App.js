import React from "react";
import Mail from "./screens/MailScreen";
import Product from "./screens/ProductScreen";
import { DataProvider } from "./utils/DataContext";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
};

export default App;
