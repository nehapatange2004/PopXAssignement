import { motion } from "framer-motion";
// import React from "react";
import { NavLink } from "react-router-dom";

const welcomepage = () => {
  return (
    <>
      <div className="card">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-details">
            <h2>Welcome to PopX</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <NavLink to="/createaccount">
            <button className="create-account-bottom">Create Account</button>
          </NavLink>
          <NavLink to="/signin">
            <button className="already-have-account-bottom">
              Already Registered? Login
            </button>
          </NavLink>
        </motion.div>
      </div>
    </>
  );
};

export default welcomepage;
