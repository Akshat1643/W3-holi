import React from "react";
import { HashLink as Hashlink } from "react-router-hash-link";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div class="wrapper childHeader">
        <div class="holi-logo">RANG-BAZAR</div>
        <div class="holi-navigations">
          <ul>
            <li>
              <input type="search" placeholder="Search products...." />
            </li>
            <li>
              <Link to="/" smooth>
                Home
              </Link>
            </li>
            <li>
              <Hashlink to="#products" smooth>
                Products
              </Hashlink>
            </li>
            <li>
              <Link to="/about" smooth>
                About-us
              </Link>
            </li>
            <li>
              <Hashlink to="#testimonials" smooth>
                Testimonials
              </Hashlink>
            </li>
            <li>
              <Hashlink to="#contact" smooth>
                Contact
              </Hashlink>
            </li>
          </ul>
        </div>
        <div className="header-hamburger">
        <i class="ri-menu-5-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
