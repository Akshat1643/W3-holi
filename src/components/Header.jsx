import React, { useEffect, useState } from "react";
import { HashLink as Hashlink } from "react-router-hash-link";
import { Link } from "react-router-dom";


const Header = () => {
  const [showMenu, setShowMenu]=useState(true)
  return (
    <header>
      <div class="wrapper childHeader">
        <div class="holi-logo">RANG-BAZAR</div>
        <div className={showMenu ? "holi-navigations" : "mob-view"}>
          <ul>
            <li>
              <input type="search" placeholder="Search products...." />
            </li>
            <li>
              <Link to="/" smooth onClick={()=>{setShowMenu(true)}}>
                Home
              </Link>
            </li>
            <li>
              <Hashlink to="#products" smooth onClick={()=>{setShowMenu(true)}}>
                Products
              </Hashlink>
            </li>
            <li>
              <Link to="/about" smooth onClick={()=>{setShowMenu(true)}}>
                About-us
              </Link>
            </li>
            <li>
              <Hashlink to="#testimonials" smooth onClick={()=>{setShowMenu(true)}}>
                Testimonials
              </Hashlink>
            </li>
            <li>
              <Hashlink to="#contact" smooth onClick={()=>{setShowMenu(true)}}>
                Contact
              </Hashlink>
            </li>
          </ul>
        </div>
        <div className="header-hamburger">
          {showMenu?<i  class="ri-menu-5-line" onClick={()=>setShowMenu(false)}></i>:<i class="ri-close-line" onClick={()=>setShowMenu(true)}></i>}
        </div>

      </div>
    </header>
  );
};

export default Header;
