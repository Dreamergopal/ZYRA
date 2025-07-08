import React from "react";
import { useDispatch } from "react-redux";
import AUTH from "../appwrite/Auth";
import { logout } from "../store/Slice";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await AUTH.logout();
    dispatch(logout());
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      title="Logout"
      className="flex items-center gap-2 bg-black/70 border border-green-700/40 text-green-400 hover:text-lime-400 hover:scale-105 transition px-3 py-1.5 rounded-lg shadow shadow-lime-400/10"
    >
      <AiOutlineLogout className="text-xl" />
      <span className="hidden md:inline font-medium tracking-wide">Logout</span>
    </button>
  );
}

export default LogoutBtn;
