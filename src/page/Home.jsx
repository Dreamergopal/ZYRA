import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiZincsearch } from "react-icons/si";
import { MdPostAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
      delay: i * 0.15,
    },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, rotate: -4 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      delay: i * 0.2,
    },
  }),
};

function Home() {
  const status = useSelector((state) => state.auth.status);
  const [showHero, setShowHero] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHero(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative bg-black text-green-300 font-[Poppins] min-h-screen px-4 sm:px-6 py-16 sm:py-20 overflow-x-hidden">

      {/* Background Blur Wrappers */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-lime-400/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute -bottom-10 -right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-green-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: showHero ? 1 : 0, y: showHero ? 0 : -120 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 sm:gap-16 items-center justify-between mb-16 sm:mb-24"
      >
        {/* Left */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 px-2 sm:px-4">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-400 leading-tight text-center lg:text-left"
          >
            Welcome to <span className="text-lime-400">ZYRA</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left"
          >
            create. connect. chronical. — a hub for creators, coders, and
            thinkers. Explore ideas that matter.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="flex justify-center lg:justify-start"
          >
            {status ? (
              <Link
                to="/all-post"
                className="inline-flex items-center gap-2 bg-lime-500 text-black font-bold py-2 px-6 rounded-xl shadow hover:scale-105 hover:shadow-lime-400/50 transition-transform duration-200"
              >
                <span>Explore Posts</span>
                <SiZincsearch className="text-xl" />
              </Link>
            ) : (
              <div className="inline-flex items-center gap-2 bg-zinc-700 text-gray-400 font-bold py-2 px-6 rounded-xl shadow cursor-not-allowed">
                <span>Login to Explore</span>
                <SiZincsearch className="text-xl" />
              </div>
            )}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="w-full lg:w-1/2 space-y-6 px-2 sm:px-4 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready to publish your own story?
          </h2>
          <p className="text-sm sm:text-base text-green-400 leading-relaxed">
            Whether you're a learner, teacher, writer, or thinker — your voice
            matters. <span className="text-lime-400">ZYRA</span> is your
            platform to{" "}
            <span className="text-white font-semibold">
              share knowledge, build networks, spark ideas, and document your
              legacy
            </span>
            .
          </p>

          {status ? (
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/post"
                className="inline-flex items-center gap-2 bg-lime-500 text-black font-bold py-2 px-6 rounded-xl shadow hover:scale-105 hover:shadow-lime-400/50 transition-transform duration-200"
              >
                <span>Create a Post</span>
                <MdPostAdd className="text-xl" />
              </Link>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-zinc-700 text-gray-400 font-bold py-2 px-6 rounded-xl shadow cursor-not-allowed">
              <span>Login to Post</span>
              <MdPostAdd className="text-xl" />
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center text-green-400"
        >
          Featured Chronicles
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[ 
            {
              title: "Education = Character + Information",
              desc: `Education is more than facts — it’s about shaping who we become.`,
              icon: "🧠",
            },
            {
              title: "The AI Classroom: Rethinking Learning",
              desc: `AI transforms teaching — but equity and ethics are key.`,
              icon: "🎨",
            },
            {
              title: "Ed-Tech Unicorns: Democratizing or Dividing?",
              desc: `Are we bridging or widening the gap with technology?`,
              icon: "💻",
            },
          ].map((topic, idx) => (
            <motion.div
              key={idx}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              variants={cardVariant}
              viewport={{ once: true }}
              className="group relative bg-black p-6 rounded-2xl border border-green-800/40 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-lime-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-green-500/5 to-transparent rounded-2xl pointer-events-none blur-sm group-hover:blur-md transition" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-200 mb-2">
                  {topic.title}
                </h3>
                <p className="text-green-400 text-sm sm:text-base">
                  {topic.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
