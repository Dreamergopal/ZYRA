import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AUTH from "../appwrite/Auth";
import { login as storeLogin } from "../store/Slice";
import Input from "./Input";
import { FaSignInAlt } from "react-icons/fa";

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
    <div className="max-h-3/4 bg-gradient-to-r from-black via-zinc-900 to-black text-green-300 font-[Poppins] px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: About ZYRA */}

        <section className="w-full max-w-md mx-auto bg-zinc-900 border border-green-700/30 rounded-2xl shadow-xl shadow-lime-400/10 p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-lime-400 tracking-wide mb-2">
              Welcome Back to ZYRA
            </h1>
            <p className="text-green-500 text-sm italic">
              Continue your chronicle.
            </p>
            <p className="text-green-500 text-md mt-2">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-lime-400 hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-900/20 text-red-400 text-sm border border-red-600 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(login)} className="space-y-6">
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
          </form>

          <div className="mt-6 text-center text-xs text-green-600 tracking-widest uppercase">
            create. connect. chronical.
          </div>
        </section>
        {/* RIGHT: Login Form */}
        <section className="px-6 mx-10 md:px-8 space-y-6">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="ZYRA Logo"
              className="h-10 w-10 hover:scale-105 transition-transform duration-300"
            />
            <span className="text-4xl font-extrabold text-lime-400 tracking-widest">
              ZYRA
            </span>
          </div>

          <h2 className="text-2xl font-bold text-lime-400">
            Chronicle your thoughts.
          </h2>

          <p className="text-green-400 text-md leading-relaxed">
            ZYRA is your space to think, write, and connect. Whether you're
            sharing deep insights, quick thoughts, or long-form chronicles, ZYRA
            welcomes it all.
          </p>

          <p className="text-green-500 text-sm italic">
            Return to your journey. Your chronicle awaits.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Login;
