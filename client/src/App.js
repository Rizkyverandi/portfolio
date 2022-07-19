import React from "react";
import { Routers } from "./configs";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>        
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
