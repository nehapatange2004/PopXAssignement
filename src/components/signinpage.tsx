import { motion } from "framer-motion";
// import React from "react";
import { NavLink } from "react-router-dom";

const signinpage = () => {
  return (
    <div className="card">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="signin-header">
          <h2>Signin to your PopX account</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="input-field">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="text" placeholder="Enter password" required />
        </div>
        <NavLink to="/profile">
          <button className="login">Login</button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default signinpage;
