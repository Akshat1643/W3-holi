import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sec">
        <span>RANG-BAZAR</span>
        <span> Your One-Stop Shop for Holi Colors & Toys!</span>
        <span>
          <i class="ri-facebook-line"></i>
          <i class="ri-instagram-line"></i>
          <i class="ri-github-line"></i>
        </span>
      </div>
      <div className="footer-sec">
        <span>About us</span>
        <span>Delivery</span>
        <span>Privacy Policy</span>
        <span>Terms abd Condition</span>
      </div>
      <div className="footer-sec">
        <span>Customer Support</span>
        <span>FAQs</span>
        <span>Shipping & Delivery</span>
        <span>Return & Refund Policy</span>
        <span>Privacy Policy</span>
      </div>
      <div className="footer-sec">
        <span>My Account</span>
        <span>Order History</span>
        <span>Track My Order</span>
        <span>Wishlist</span>
      </div>
      <div className="footer-sec">
        <span>Subscribe to our Newsletter</span>
        <p>Get the latest updates, offers,<br /> and news directly to your inbox.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
