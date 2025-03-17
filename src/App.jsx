import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Last from "./components/Last";
import About from "./components/About"
import Sign_up from "./components/Sign_up";
import Login from "./components/Login";

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
import "./styles/Sign_up.scss"

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Sign_up/>} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Last />
      </>
    </Router>
  );
};

export default App;
