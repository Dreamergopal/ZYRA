import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AUTH from "../appwrite/Auth";
import { login as storeLogin } from "../store/Slice";
import { logout as storeLogout } from "../store/Slice";
import Loading from "./Loading";

function FetchLogin({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AUTH.getCurrentUser();
        if (user) {
          dispatch(storeLogin(user));
        } else {
          dispatch(storeLogout());
        }
      } catch (error) {
        dispatch(storeLogout());
        console.error("Session restore failed:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);
  return <>{loading ? <Loading /> : children}</>;
}

export default FetchLogin;
