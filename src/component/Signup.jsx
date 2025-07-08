import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AUTH from "../appwrite/Auth";
import { login } from "../store/Slice";
import Input from "./Input";
import { FaLightbulb, FaUserEdit, FaUsers } from "react-icons/fa";

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const sign = async (data) => {
    const { email, password, name } = data;
    setError("");
    try {
      const create = await AUTH.createAccount({ email, password, name });
      if (create) {
        const user = await AUTH.getCurrentUser();
        if (user) dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      console.log("signup ka error " + error.message);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="max-h-3/4 bg-gradient-to-r from-black via-zinc-900 to-black text-green-300 font-[Poppins] px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: About Section */}
        <section className="px-6 md:px-8 space-y-6">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="ZYRA Logo"
              className="w-12 h-12 object-contain animate-pulse drop-shadow-lg"
            />
            <span className="text-4xl font-extrabold text-lime-400 tracking-widest">
              ZYRA
            </span>
          </div>

          <h2 className="text-2xl font-bold text-lime-400">
            Create. Connect. Chronical.
          </h2>

          <p className="text-green-400 leading-relaxed text-md">
            ZYRA is your personal thought forge — a space where creators,
            thinkers, learners, and writers come together to publish what
            matters. We help you document your journey and make your knowledge
            matter.
          </p>

          <p className="text-green-500 text-sm">
            Whether it's code, concepts, creative writing, or research — ZYRA
            empowers you to express, collaborate, and build a legacy.
          </p>

          <ul className="space-y-3 text-green-400 text-sm mt-4">
            <li className="flex items-start gap-2">
              <FaLightbulb className="text-lime-400 mt-1" />
              <span>
                Bring your ideas to life with a minimal, elegant editor.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaUsers className="text-lime-400 mt-1" />
              <span>
                Engage with a respectful and vibrant creator community.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaUserEdit className="text-lime-400 mt-1" />
              <span>
                Edit or delete your posts anytime — you’re in full control.
              </span>
            </li>
          </ul>

          <p className="text-xs text-green-600 mt-4 italic">
            Secure, distraction-free publishing — for those who want to be
            heard.
          </p>
        </section>

        {/* RIGHT: Signup Form */}
        <section className="w-full max-w-md mx-auto bg-zinc-900 border border-green-800/40 rounded-2xl p-8 shadow-xl shadow-lime-400/10 backdrop-blur-sm">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-lime-400 mb-1">
              Create Your Chronicle
            </h2>
            <p className="text-sm text-green-500">
              Already a creator?{" "}
              <Link to="/login" className="text-lime-400 hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 text-sm text-red-500 bg-red-900/20 border border-red-500 px-4 py-2 rounded">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(sign)} className="space-y-5">
            <Input
              label="Name"
              placeholder="Full Name"
              type="text"
              className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
              {...register("name", { required: true })}
            />
            <Input
              label="Email"
              placeholder="example@example.com"
              type="email"
              className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter valid email",
                },
              })}
            />
            <Input
              label="Password"
              placeholder="Example@1234"
              type="password"
              className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be 8+ characters with upper, lower, number & symbol",
                },
              })}
            />
            <button
              type="submit"
              className="w-full bg-lime-500 text-black font-bold py-2 rounded-xl shadow hover:bg-lime-400 transition"
            >
              Join ZYRA
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-green-600 tracking-widest uppercase">
            create. connect. chronical.
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
