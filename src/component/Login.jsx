import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AUTH from "../appwrite/Auth";
import { login as storeLogin } from "../store/Slice";
import Input from "./Input";
import { FaSignInAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Login() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    const { email, password } = data;
    setError("");
    try {
      const alreadyLog = await AUTH.getCurrentUser();
      if (alreadyLog) {
        dispatch(storeLogin(alreadyLog));
        navigate("/");
      } else {
        const session = await AUTH.login({ email, password });
        dispatch(storeLogin(session));
        navigate("/");
      }
    } catch (error) {
      console.log("login error: " + error.message);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-zinc-900 to-black text-green-300 font-[Poppins] px-4 py-10 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Login Form */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto bg-zinc-900 border border-green-700/30 rounded-2xl shadow-xl shadow-lime-400/10 p-6 sm:p-8 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="text-3xl font-extrabold text-lime-400 tracking-wide mb-2">
              Welcome Back to ZYRA
            </h1>
            <p className="text-green-500 text-sm italic">
              Continue your chronicle.
            </p>
            <p className="text-green-500 text-sm mt-2">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-lime-400 hover:underline">
                Sign up
              </Link>
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-red-900/20 text-red-400 text-sm border border-red-600 px-4 py-2 rounded mb-4"
            >
              {error}
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit(login)}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="••••••••"
              type="password"
              className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message:
                    "Password must be 8+ characters and include uppercase, lowercase, number, and symbol",
                },
              })}
            />

            <button
              type="submit"
              className="w-full bg-lime-500 text-black font-bold py-2 rounded-xl shadow hover:bg-lime-400 transition flex items-center justify-center gap-2"
            >
              <FaSignInAlt className="text-lg" />
              Sign In
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-xs text-green-600 tracking-widest uppercase"
          >
            create. connect. chronical.
          </motion.div>
        </motion.section>

        {/* RIGHT: About ZYRA */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="px-2 sm:px-6 space-y-6 text-center md:text-left"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center md:justify-start space-x-3"
          >
            <img
              src="/logo.png"
              alt="ZYRA Logo"
              className="h-10 w-10 hover:scale-105 transition-transform duration-300"
            />
            <span className="text-4xl font-extrabold text-lime-400 tracking-widest">
              ZYRA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-lime-400"
          >
            Chronicle your thoughts.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-green-400 text-sm sm:text-md leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            ZYRA is your space to think, write, and connect. Whether you're
            sharing deep insights, quick thoughts, or long-form chronicles, ZYRA
            welcomes it all.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-green-500 text-sm italic"
          >
            Return to your journey. Your chronicle awaits.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
}

export default Login;
