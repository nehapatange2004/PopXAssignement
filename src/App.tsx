// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Welcomepage from "./components/welcomepage";
import Signinpage from "./components/signinpage";
import Createaccount from "./components/createaccount";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import { AnimatePresence } from "framer-motion";

function App() {
  
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/signin" element={<Signinpage />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
