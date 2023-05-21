import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import "./Style/header.scss";
import "./Style/App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
