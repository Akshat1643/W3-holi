import React, { useEffect, useState } from "react";
import { HashLink as Hashlink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [userName, setUserName] = useState("");


  const updateUser = () => {
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    setUserName(savedUser?.name || ""); 
  };

  useEffect(() => {
    updateUser();
    const handleUserUpdate = () => updateUser();
    window.addEventListener("userUpdated", handleUserUpdate);

    return () => {
      window.removeEventListener("userUpdated", handleUserUpdate);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserName(""); 
    window.dispatchEvent(new Event("userUpdated")); 
  };

  return (
    <header>
      <div className="wrapper childHeader">
        <div className="holi-logo">RANG-BAZAR</div>
        <div className={showMenu ? "holi-navigations" : "mob-view"}>
          <ul>
            <li>
              <input type="search" placeholder="Search products...." />
            </li>
            <li>
              <Link to="/" smooth onClick={() => setShowMenu(true)}>
                Home
              </Link>
            </li>
            <li>
              <Hashlink to="#products" smooth onClick={() => setShowMenu(true)}>
                Products
              </Hashlink>
            </li>
            {userName ? (
              <>
                <li>Welcome, {userName}</li>
                <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign-up" smooth onClick={() => setShowMenu(true)}>
                    Sign-up
                  </Link>
                </li>
                {/* <li>
                  <Link to="/login" smooth onClick={() => setShowMenu(true)}>
                    Login
                  </Link>
                </li> */}
              </>
            )}
            <li>
              <Link to="/about" smooth onClick={() => setShowMenu(true)}>
                About-us
              </Link>
            </li>
            <li>
              <Hashlink
                to="#testimonials"
                smooth
                onClick={() => setShowMenu(true)}
              >
                Testimonials
              </Hashlink>
            </li>
            <li>
              <Hashlink to="#contact" smooth onClick={() => setShowMenu(true)}>
                Contact
              </Hashlink>
            </li>
          </ul>
        </div>
        <div className="header-hamburger">
          {showMenu ? (
            <i className="ri-menu-5-line" onClick={() => setShowMenu(false)}></i>
          ) : (
            <i className="ri-close-line" onClick={() => setShowMenu(true)}></i>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
