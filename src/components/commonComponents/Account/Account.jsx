import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Account.css";
import { AiOutlineLogout } from "react-icons/ai";
import { motion } from "framer-motion";
import { pageReloader } from "../../../utils/pageReloader";
import { userIsLogin } from "../../../redux/slices/userIsLoginSlice";
export default function Account() {
  const user = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  return (
    <div className="user-account-container">
      <div className="user-logo-container">
        <img className="user-logo-image" src={user?.image} alt="user" />
      </div>
      <motion.div
        whileHover={{ scale: 1.3 }}
        onClick={() => {
          dispatch(userIsLogin());
          pageReloader(dispatch);
        }}
      >
        <AiOutlineLogout size={"42px"} cursor={"pointer"} />
      </motion.div>
    </div>
  );
}
