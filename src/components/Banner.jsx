const Banner = ({ text, className }) => {
    return (
      <div className={`holi-hero ${className}`}>
        <div className="banner-text">{text}</div>
      </div>
     
    );
  };
  
  export default Banner;