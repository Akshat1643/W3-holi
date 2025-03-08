import React from "react";

const Testimonial = ({ className, name, review, rating }) => {
  return (
    <div className="testi">
      <div className={`testi-logo ${className}`}>
        {/* You can add an icon here if needed */}
      </div>
      <div className="testi-name">{name}</div>
      <div className="testi-review">{review}</div>
      <div className="testi-no">{rating}/10</div>
    </div>
  );
};

export default Testimonial;

