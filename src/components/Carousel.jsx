import React from "react";
import Slider from "react-slick";
import Banner from "../components/Banner"; // Import the Banner component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slick settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Time for each slide
    arrows: true, // Show next/prev arrows
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {/* Banners */}
        <Banner 
          text={<>GET READY TO IMMERSE <br />IN THE VIBRANT COLORS <br />OF HOLI WITH <br />RANG BAZAR</>} 
          className="banner-1"
        />
        <Banner 
          text={<>CELEBRATE HOLI <br />WITH JOY & COLORS <br />IN A GRAND WAY!</>} 
          className="banner-2"
        />
        <Banner 
          text={<>LET'S MAKE THIS HOLI <br />THE MOST COLORFUL ONE <br />WITH RANG BAZAR!</>} 
          className="banner-3"
        />
      </Slider>
    </div>
  );
};

export default Carousel;
