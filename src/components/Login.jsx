import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (!savedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {  
      alert("Login Successfully!");
      setEmail("");
      setPassword("");

      window.dispatchEvent(new Event("userUpdated")); 
      navigate("/"); 
    } else {
      alert("Credentials do not match!");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <span>Login</span>
        <div className="fields">
          <label>Email-id</label>
          <input
            type="email"
            placeholder="Email-id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="fields">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="fields">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
