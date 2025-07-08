import React from "react";
import { Link } from "react-router-dom";
import { SiZincsearch } from "react-icons/si";
import { MdPostAdd } from "react-icons/md";

function Home() {
  return (
    <div className="bg-gradient-to-r from-black via-zinc-900 to-black text-green-300 font-[Poppins] min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start justify-between mb-20">
        {/* LEFT: Hero Section */}
        <div className="md:w-1/2 space-y-8 mx-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 tracking-tight leading-tight">
            Welcome to <span className="text-lime-400">ZYRA</span>
          </h1>
          <p className="text-lg md:text-xl max-w-md leading-relaxed text-green-300">
            create. connect. chronical. — a hub for creators, coders, and
            thinkers. Explore ideas that matter.
          </p>
          <Link
            to="/all-post"
            className="inline-flex items-center gap-2 bg-lime-500 text-black font-bold py-2 px-6 rounded-xl shadow hover:bg-lime-400 transition"
          >
            <span>Explore Posts</span>
            <SiZincsearch className="text-xl" />
          </Link>
        </div>

        {/* RIGHT: CTA Section */}
        <div className="md:w-1/2 space-y-6 py-3">
          <h2 className="text-3xl font-semibold text-green-300">
            Ready to publish your own story?
          </h2>
          <p className="text-md text-green-400 max-w-md leading-relaxed">
            Whether you're a learner, teacher, writer, or thinker — your voice
            matters. <span className="text-lime-400 "> ZYRA</span> is your
            platform to{" "}
            <span className="text-white text-xl">
              share knowledge, build networks, spark ideas, and document your
              legacy
            </span>{" "}
            for the world to see.
          </p>
          <Link
            to="/post"
            className="inline-flex items-center gap-2 bg-lime-500 text-black font-bold py-2 px-6 rounded-xl shadow hover:bg-lime-400 transition"
          >
            <span>Create a Post</span>
            <MdPostAdd className="text-xl" />
          </Link>
        </div>
      </div>

      {/* FEATURED CARDS BELOW */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-400">
          Featured Chronicles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Education = Character + Information",
              desc: `In a world flooded with information, we often mistake knowledge for education.
              But education is more than memorizing facts or mastering skills — it’s about the person we become in the process.

              Information gives us direction.

              Character gives us purpose.

              A truly educated person isn’t just informed — they are compassionate, ethical, and responsible.
              They use their knowledge not just to build careers, but to build communities, lead with integrity, and live with purpose.
              
              Let’s strive to educate not just the mind, but the heart.
              🔁 Share if you believe education should inspire both intellect and integrity.
              🧠💚 #Education #CharacterMatters #LearnToLead #WisdomOverKnowledge #ZYRAChronicle`,
              icon: "🧠",
            },
            {
              title: "The AI Classroom: Rethinking Learning",
              desc: "The AI Classroom: Rethinking Learning AI is redefining education, prompting a crucial philosophical shift. Is knowing now about asking the right questions of AI, not memorization? The teacher's role evolves into guiding critical thinking and fostering unique human skills like creativity and empathy. We must also confront the ethical implications: ensuring equitable access, mitigating algorithmic bias, and safeguarding student privacy. The challenge is to leverage AI to enhance human potential, not diminish it, fostering critical AI literacy for all.",
              icon: "🎨",
            },
            {
              title: "Ed-Tech Unicorns: Democratizing or Dividing?",
              desc: "India's Ed-Tech unicorns promised to revolutionize education, offering personalized learning and wider access. While they've certainly expanded reach for many, especially during the pandemic, a critical question remains: are they truly democratizing education, or inadvertently deepening the digital divide? Often catering to urban, tech-savvy populations with disposable incomes, these platforms risk leaving behind students in rural areas or economically weaker sections lacking device access, reliable internet, or even digital literacy. Furthermore, the high cost of premium courses can create a two-tiered system, raising concerns about equity and the true impact on India's diverse student population.",
              icon: "💻",
            },
          ].map((topic, idx) => (
            <div
              key={idx}
              className="relative bg-black p-6 rounded-2xl border border-green-800/40 shadow-lg hover:shadow-lime-400/20 backdrop-blur-md hover:scale-105 transition duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-green-500/5 to-transparent rounded-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-green-200 mb-2">
                  {topic.title}
                </h3>
                <p className="text-green-400">{topic.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
