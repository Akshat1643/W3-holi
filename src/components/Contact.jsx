import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8206387966975!2d77.42228007630607!3d28.66508868260005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1cab05312a5%3A0x2c9e1753d16cd363!2sMahender%20Holi%20colour%20%26%20Pichkari%20shop!5e0!3m2!1sen!2sin!4v1741415420258!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="form">
        <div className="form-field">
          <label>Name</label>
          <input type="text" placeholder="Enter your name..." />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email..." />
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <input type="number" placeholder="Enter your number..." />
        </div>
        <div className="form-field">
          <label>Message for us</label>
          <input type="text" placeholder="Enter your message..." />

        </div>
        <button>Submit..</button>
      </div>
    </div>
  );
};

export default Contact;
