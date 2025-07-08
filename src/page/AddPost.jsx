import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SERVICE from "../appwrite/Services";
import Input from "../component/Input";
import { useSelector } from "react-redux";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

function AddPost() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.userData);

  const create = async (data) => {
    setError("");

    const generateSlug = (title) =>
      title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .slice(0, 30);

    try {
      const slug = generateSlug(data.title);
      await SERVICE.createPost({
        title: data.title,
        content: data.content,
        slug,
        userId: user.$id,
        is_published: true,
        author: user.name,
      });
      navigate("/all-post");
    } catch (error) {
      console.log("addpost" + error.message);
      setError("Post creation failed");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-zinc-900 to-black text-green-300 font-[Poppins] px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-12 px-2"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-lime-400 mb-2">
          Create Your Chronicle
        </h1>
        <p className="text-base sm:text-lg text-green-300 italic">
          Your thoughts deserve a place. Chronicle them with ZYRA.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex flex-col justify-center px-2 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-400 leading-tight mb-4">
            Every thought is a spark.
          </h2>
          <p className="text-base sm:text-lg text-green-500 italic">
            Ignite your digital journal with{" "}
            <span className="text-lime-400 font-semibold">ZYRA</span>. Share
            what you think, create what you believe.
          </p>
          <div className="mt-6 text-xs sm:text-sm text-green-700 tracking-widest uppercase">
            Chronicle your thoughts • Connect the dots • Contribute your voice
          </div>

          {/* Guidelines */}
          <div className="mt-6 p-4 bg-black/50 border border-green-700/30 shadow-lime-400/10 backdrop-blur-sm shadow-xl rounded-lg text-sm sm:text-md text-green-400">
            <h3 className="text-lime-400 font-semibold mb-2 text-sm sm:text-base">
              🛡️ Your Safety, Our Priority
            </h3>
            <ul className="list-disc list-inside space-y-1 text-green-500">
              <li>Your content is yours — we don’t claim ownership.</li>
              <li>We never share your data or personal info.</li>
              <li>Respectful, original content is welcomed and celebrated.</li>
              <li>You can edit or delete your post anytime.</li>
              <li>
                Hate speech, plagiarism, or harmful material is not tolerated.
              </li>
            </ul>
            <p className="mt-3 italic text-green-600 text-xs">
              By publishing, you agree to uphold the values of ZYRA: respect,
              authenticity, and thoughtful sharing.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-auto bg-zinc-900 border border-green-700/30 rounded-2xl p-6 sm:p-10 shadow-xl shadow-lime-400/10 backdrop-blur-sm"
        >
          <h2 className="text-2xl sm:text-3xl mb-2 font-bold text-lime-400 text-center">
            Fire Thoughts
          </h2>
          <p className="text-center text-green-500 text-sm italic tracking-wide mb-6">
            Your knowledge. Your voice. Your legacy.
          </p>

          {error && (
            <div className="text-red-500 text-sm bg-red-900/20 border border-red-500 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(create)} className="space-y-6">
            <Input
              label="Title"
              placeholder="Enter your chronicle title"
              className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
              {...register("title", { required: true })}
            />

            <div>
              <label className="block mb-2 text-sm font-medium text-green-500">
                Content
              </label>
              <textarea
                className="w-full bg-black border border-green-800/40 text-green-200 placeholder:text-green-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400/30 transition"
                rows="6"
                placeholder="Show your chronicle to the world..."
                {...register("content", { required: true })}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-between mt-6 gap-4">
              <motion.button
                type="submit"
                className="bg-lime-500 text-black font-bold py-2 px-6 rounded-xl shadow hover:bg-lime-400 transition flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Fire post
                <FaLocationArrow className="text-base" />
              </motion.button>

              <div className="text-left text-green-500 text-sm italic leading-snug">
                <p>"Thoughts become chronicles when they're written."</p>
                <p className="mt-1 text-green-600 text-xs uppercase tracking-widest">
                  create. connect. chronical.
                </p>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default AddPost;
