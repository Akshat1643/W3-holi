import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Last from "./components/Last";
import About from "./components/About"

// styles
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Product.scss";
import "./styles/Testimonial.scss";
import "./styles/Contact.scss";
import "./styles/Footer.scss";
import "./styles/Last.scss";
import "./styles/Wbf_card.scss";
import "./styles/About.scss";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Last />
      </>
    </Router>
  );
};

export default App;
