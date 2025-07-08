import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-green-200 px-6 py-16 font-[Poppins]">
      <div className="max-w-5xl w-[80%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-lime-400 mb-2">
            About ZYRA
          </h1>
          <p className="text-green-400 tracking-widest uppercase">
            create. connect. chronical.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-lg leading-relaxed text-green-300"
        >
          <p>
            <span className="text-lime-400 font-semibold">ZYRA</span> is a
            platform for creators, writers, and storytellers to express freely,
            connect meaningfully, and preserve their thoughts in digital form.
            It's your stage, your journal, and your voice — all in one.
          </p>

          <p>
            We believe in safe, respectful, and creative expression. To maintain
            a welcoming environment for all, we ask every user to adhere to a
            few community rules and guidelines.
          </p>

          <ul className="list-disc pl-6 text-green-400 space-y-2">
            <li>
              <strong className="text-lime-400">Respect all users</strong> —
              Discrimination, hate speech, and harassment will not be tolerated.
            </li>
            <li>
              <strong className="text-lime-400">No illegal content</strong> —
              Posts that violate legal or ethical standards will be removed.
            </li>
            <li>
              <strong className="text-lime-400">Post original work</strong> —
              Plagiarism is prohibited. Credit where credit is due.
            </li>
            <li>
              <strong className="text-lime-400">Stay constructive</strong> —
              Criticism is welcome, but keep it thoughtful and kind.
            </li>
            <li>
              <strong className="text-lime-400">No spam or promotions</strong> —
              Use ZYRA to share ideas, not to advertise products or services.
            </li>
          </ul>

          <p>
            By using ZYRA, you agree to follow these rules and help us build a
            creative and respectful community. Violation of these terms may lead
            to post removal or account restriction.
          </p>

          <p>
            Together, let’s build a space that values thought, voice, and
            expression.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center text-green-600 text-sm tracking-widest uppercase"
        >
          Built for creators — with 💚 from Team ZYRA
        </motion.div>
      </div>
    </section>
  );
}

export default About;
