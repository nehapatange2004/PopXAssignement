import { motion } from "framer-motion";
// import React from "react";
import { NavLink } from "react-router-dom";

const createaccount = () => {
  return (
    <div className="card">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="signin-header">
          <h2>Create your PopX account</h2>
        </div>
        <div className="input-field">
          <label>
            Full Name<span>*</span>
          </label>
          <input type="text" placeholder="Enter name" required />
        </div>
        <div className="input-field">
          <label>
            Phone number<span>*</span>
          </label>
          <input type="number" placeholder="Enter phone number" required />
        </div>
        <div className="input-field">
          <label>
            Email Address<span>*</span>
          </label>
          <input type="email" placeholder="Enter email address" required />
        </div>
        <div className="input-field">
          <label>
            Password<span>*</span>
          </label>
          <input type="text" placeholder="Enter password" required />
        </div>
        <div className="input-field">
          <label>Company name</label>
          <input type="text" placeholder="Enter company name" required />
        </div>

        <div className="agency">
          <p>Are you an Agency?</p>
          <input type="radio" id="yes" name="agency" />
          <label htmlFor="agency">Yes</label>
          <input type="radio" id="no" name="agency" />
          <label htmlFor="no">No</label>
        </div>
        <NavLink to="/profile">
          <button className="createaccount">Create Account</button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default createaccount;
