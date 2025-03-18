import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Sign_up = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone_no, setPhone_no] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {name,
            email,
            password
    }
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Form Submitted Successfully!");
    setName("")
    setEmail("")
    setPassword("")
    setPhone_no("")
    
    window.dispatchEvent(new Event("userUpdated"));
    navigate("/"); 
  };
  return (
   
      <section className="wrapper">
        
        <form onSubmit={handleSubmit} >
         <span>Sign-up</span>
          <div className="fields">
          <label>Name</label>
          <input type="text"  placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
          </div>
          <div className="fields">
          <label>Email-id</label>
          <input type="email"  placeholder='Email-id'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
          />
          </div>
          <div className="fields">
          <label>Phone-no</label>
          <input type="number"  placeholder='Phone-no'
           value={phone_no}
           onChange={(e) => setPhone_no(e.target.value)}
           required/>
          </div>
          <div className="fields">
          <label>Password</label>
          <input type="password"  placeholder='password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
           />
          </div>
          <div className="fields">
            <button type='submit'>Submit form</button>
          </div>
        </form>
      </section>
  )
}

export default Sign_up

