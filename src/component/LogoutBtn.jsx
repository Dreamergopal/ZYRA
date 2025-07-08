import React from "react";
import { useDispatch } from "react-redux";
import AUTH from "../appwrite/Auth";
import { logout } from "../store/Slice";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await AUTH.logout();
    dispatch(logout());
    navigate("/");
  };

  return (
    <motion.button
      onClick={handleLogout}
      title="Logout"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-black/70 border border-green-700/40 text-green-400 hover:text-lime-400 transition-all duration-200 px-3 py-2 rounded-lg shadow shadow-lime-400/10"
    >
      <AiOutlineLogout className="text-xl" />
      <span className="hidden sm:inline font-medium tracking-wide">Logout</span>
    </motion.button>
  );
}

export default LogoutBtn;
