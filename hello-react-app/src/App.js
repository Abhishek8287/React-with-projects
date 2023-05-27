import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

import Services from "./Components/Services";

import "./Style/header.scss";
import "./Style/App.scss";
import "./Style/home.scss";
import "./Style/footer.scss";
import "./Style/contact.scss";

import "./Style/mediaquery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
