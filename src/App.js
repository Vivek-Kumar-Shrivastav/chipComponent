import { useState, useEffect } from "react";
import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import { useData, DataProvider } from "./DataContext";
import AddEmail from "./AddEmail";
import ChipBox from "./ChipBox";
const App = () => {
  return (
    <DataProvider>
      <>
        <div className="App">
          <AddEmail />
          <ChipBox />
        </div>
      </>
    </DataProvider>
  );
};

export default App;
