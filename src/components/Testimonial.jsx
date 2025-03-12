import React from "react";
import { motion } from "framer-motion";

const Testimonial = ({ className, name, review, rating }) => {
  return (
    <motion.div
     className="testi">
      <div className={`testi-logo ${className}`}>
      </div>
      <div className="testi-name">{name}</div>
      <div className="testi-review">{review}</div>
      <div className="testi-no">{rating}/10</div>
    </motion.div>
  );
};

export default Testimonial;

