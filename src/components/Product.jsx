import React from "react";

const Product = ({ pimage, name, description, price }) => {
  return (
    <div className="product">
      <div className="p1-img">
        <img src={pimage} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="price">
        <span>₹{price}</span>
        <button>Add to cart</button>
        <button>Buy Now</button>

      </div>
    </div>
  );
};

export default Product;