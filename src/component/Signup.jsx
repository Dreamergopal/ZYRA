import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AUTH from "../appwrite/Auth";
import { login } from "../store/Slice";
import Input from "./Input";
import { FaLightbulb, FaUserEdit, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-r from-black via-zinc-900 to-black text-green-300 font-[Poppins] px-4 py-10 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: About Section */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-6 space-y-6 text-center md:text-left"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:justify-start space-x-3"
          >
            <img
              src="/logo.png"
              alt="ZYRA Logo"
              className="w-12 h-12 object-contain animate-pulse drop-shadow-lg"
            />
            <span className="text-4xl font-extrabold text-lime-400 tracking-widest">
              ZYRA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-lime-400"
          >
            Create. Connect. Chronical.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-green-400 leading-relaxed text-md max-w-lg mx-auto md:mx-0"
          >
            ZYRA is your personal thought forge — a space where creators,
            thinkers, learners, and writers come together to publish what
            matters. We help you document your journey and make your knowledge
            matter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-green-500 text-sm max-w-md mx-auto md:mx-0"
          >
            Whether it's code, concepts, creative writing, or research — ZYRA
            empowers you to express, collaborate, and build a legacy.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-3 text-green-400 text-sm mt-4"
          >
            {[
              {
                icon: <FaLightbulb className="text-lime-400 mt-1" />,
                text: "Bring your ideas to life with a minimal, elegant editor.",
              },
              {
                icon: <FaUsers className="text-lime-400 mt-1" />,
                text: "Engage with a respectful and vibrant creator community.",
              },
              {
                icon: <FaUserEdit className="text-lime-400 mt-1" />,
                text: "Edit or delete your posts anytime — you’re in full control.",
              },
            ].map(({ icon, text }, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-2"
              >
                {icon}
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs text-green-600 mt-4 italic"
          >
            Secure, distraction-free publishing — for those who want to be
            heard.
          </motion.p>
        </motion.section>

        {/* RIGHT: Signup Form */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-md mx-auto bg-zinc-900 border border-green-800/40 rounded-2xl p-6 sm:p-8 shadow-xl shadow-lime-400/10 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-center"
          >
            <h2 className="text-2xl font-bold text-lime-400 mb-1">
              Create Your Chronicle
            </h2>
            <p className="text-sm text-green-500">
              Already a creator?{" "}
              <Link to="/login" className="text-lime-400 hover:underline">
                Sign In
              </Link>
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm text-red-500 bg-red-900/20 border border-red-500 px-4 py-2 rounded"
            >
              {error}
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit(sign)}
            className="space-y-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              {
                name: "name",
                label: "Name",
                placeholder: "Full Name",
                type: "text",
                validate: { required: true },
              },
              {
                name: "email",
                label: "Email",
                placeholder: "example@example.com",
                type: "email",
                validate: {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter valid email",
                  },
                },
              },
              {
                name: "password",
                label: "Password",
                placeholder: "Example@1234",
                type: "password",
                validate: {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be 8+ characters with upper, lower, number & symbol",
                  },
                },
              },
            ].map((input, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Input
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                  className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
                  {...register(input.name, input.validate)}
                />
              </motion.div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-lime-500 text-black font-bold py-2 rounded-xl shadow hover:bg-lime-400 transition"
            >
              Join ZYRA
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center text-xs text-green-600 tracking-widest uppercase"
          >
            create. connect. chronical.
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default Signup;
