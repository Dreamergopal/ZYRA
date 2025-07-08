import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../component/Loading";

export const contactData = async ({ request }) => {
  try {
    const response = await request.formData();
    const data = Object.fromEntries(response);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

function Contact() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  if (loading) return <Loading />;

  return (
    <section className="min-h-fit bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6 font-[Poppins]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-lime-400 mb-2">
          One. Two. & Contact!
        </h1>
        <p className="text-lg text-green-300">
          Got something to share or ask? Reach out — we’re always listening!
        </p>
      </motion.div>

      <Form
        method="POST"
        action="/contact"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        onSubmit={handleSubmit}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block mb-1 text-sm text-green-500">Name</label>
            <input
              name="name"
              type="text"
              required
              autoComplete="off"
              placeholder="e.g., Gopal Kumar"
              className="w-full px-4 py-3 bg-black border border-green-700/40 text-green-200 placeholder:text-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-green-500">
              Contact Number
            </label>
            <input
              name="contact"
              type="tel"
              required
              autoComplete="off"
              placeholder="9876543210"
              className="w-full px-4 py-3 bg-black border border-green-700/40 text-green-200 placeholder:text-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-green-500">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="off"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black border border-green-700/40 text-green-200 placeholder:text-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block mb-1 text-sm text-green-500">Message</label>
            <textarea
              name="message"
              rows="8"
              required
              placeholder="What's on your mind?"
              className="w-full h-40 px-4 py-3 bg-black border border-green-700/40 text-green-200 placeholder:text-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-3 rounded-md transition-transform duration-300 text-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Submit Message
          </motion.button>
        </motion.div>
      </Form>
    </section>
  );
}

export default Contact;
