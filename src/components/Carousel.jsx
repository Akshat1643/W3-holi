import React from "react";
import Slider from "react-slick";
import Banner from "../components/Banner"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
 
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true, 
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
