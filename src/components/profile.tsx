
import profilepic from "../assets/profilepic.png";
import cam from "../assets/cameraimg.svg";
import { motion } from "framer-motion";
const profile = () => {
  return (
    <div className="card">
      <p className="profile-header">Account Settings</p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="profileimg">
          <img src={profilepic} alt="profile pricture" height="70px"></img>
          <img src={cam} alt="icon" className="camicon" />
        </div>

        <div className="profile-detials">
          <h4>Marry Doe</h4>
          <p>Marry@Gmail.com</p>
        </div>
        <p className="bio">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          assumenda doloremque, autem, mollitia repudiandae consequuntur ratione
          id.
        </p>
      </motion.div>
    </div>
  );
};

export default profile;
