import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AUTH from '../appwrite/Auth';
import {login as storeLogin} from "../store/Slice"

function FetchLogin({children}) {
    const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AUTH.getCurrentUser();
        if (user) {
          dispatch(storeLogin(user));
        }
      } catch (error) {
        console.error("Session restore failed:", error.message);
      }
    };
    fetchUser();
  }, []);
  return (
   <>
   {children}
   </>
  )
}

export default FetchLogin

