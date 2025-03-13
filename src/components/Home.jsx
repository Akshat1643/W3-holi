import React from "react";
import Carousel from "./Carousel";
import Product from "./Product";
import Testi from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Wbf_card from "./Wbf_card";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div style={{ width: "100%", margin: "0 auto" }} className="wrapper">
       < Carousel />
      </div>
      <div className="wrapper">
     
        <br />
        <div className="holi-products" id="products">
          <div className="product-heading">
            <motion.span
              whileInView={{
                fontSize: ["2.5rem", "3rem", "2.5rem"], // Scaling up and back
              }}
              transition={{
                duration: 3, // Total animation time (3 seconds)
                ease: "easeInOut",
              }}
            >
              Products
            </motion.span>
            <span></span>
          </div>
          <div className="product-cards-container">
            <Product
              pimage="/p1.webp"
              name="Herbal Gulal"
              description="Natural and skin-friendly colors for Holi festivals."
              price="900"
            />
            <Product
              pimage="/p2.webp"
              name="Gulal Combo"
              description="A vibrant mix of herbal colors for Holi fun."
              price="900"
            />
            <Product
              pimage="/p3.webp"
              name="Water Gun"
              description="Durable and high-pressure pichkari for Holi play."
              price="900"
            />
            <Product
              pimage="/p4.webp"
              name="Water Balloons"
              description="Quick-fill balloons for an exciting Holi battle."
              price="900"
            />
            <Product
              pimage="/p5.webp"
              name="Snow Sprays"
              description="Foam-based snow spray for joyful Holi moments."
              price="900"
            />
            <Product
              pimage="/p6.webp"
              name="Color Smoke"
              description="Vibrant color smoke bombs for festive vibes."
              price="900"
            />
          </div>
        </div>
        <br />
        <div className="why-buy">
          <div className="wbf-heading">
            <motion.span
              whileInView={{
                fontSize: ["2.5rem", "3rem", "2.5rem"], // Scaling up and back
              }}
              transition={{
                duration: 3, // Total animation time (3 seconds)
                ease: "easeInOut",
              }}
            >
              Why Buy From Us?
            </motion.span>
          </div>
          <div className="wbf-card-container">
            <Wbf_card
              heading="🌈 Vibrant Colors"
              content="Our colors are skin-friendly, non-toxic, and eco-friendly."
            />
            <Wbf_card
              heading="🪅 Fun Holi Toys"
              content="Water guns, balloons, and more to make your Holi exciting!"
            />
            <Wbf_card
              heading="⚡ High-Quality Products"
              content="We ensure premium-grade colors and durable Holi toys."
            />
            <Wbf_card
              heading="🚀 Fast Delivery"
              content="Get your Holi essentials delivered on time, hassle-free!"
            />
            <Wbf_card
              heading="💰 Affordable Prices"
              content="Festive discounts and budget-friendly Holi shopping."
            />
            <Wbf_card
              heading="🌿 Eco-Friendly Choices"
              content="Herbal colors and water-saving toys for a greener Holi."
            />
          </div>
        </div>
        <br />
        <div className="testimonials" id="testimonials">
          <motion.div className="testimonials-heading">
            <motion.span
            >
              testimonials
            </motion.span>
            <span>What people say about us ...</span>
          </motion.div>
          <div className="testimonial-card-container">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }} // First card
            >
              <Testi
                className="t1"
                name="Akshat"
                review="Great experience!"
                rating="9.0"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }} // Second card (after 0.3s)
            >
              <Testi
                className="t2"
                name="Rahul"
                review="Good service, but can improve."
                rating="7.5"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }} // Third card (after 0.6s)
            >
              <Testi
                className="t3"
                name="Priya"
                review="Not satisfied with the product."
                rating="4.5"
              />
            </motion.div>
          </div>
        </div>
        <br />
        <div className="contact-us" id="contact">
          <div className="contact-heading">
            <motion.span
              whileInView={{
                fontSize: ["2.5rem", "3rem", "2.5rem"], // Scaling up and back
              }}
              transition={{
                duration: 3, // Total animation time (3 seconds)
                ease: "easeInOut",
              }}
            >
              Contact-us
            </motion.span>
            <span>We are here for you..</span>
          </div>
          <Contact />
        </div>
        <br />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
