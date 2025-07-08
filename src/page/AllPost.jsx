import React, { useEffect, useState } from "react";
import SERVICE from "../appwrite/Services";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";
import { motion } from "framer-motion";

function AllPost() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    try {
      const posts = await SERVICE.allPost();
      if (posts) {
        setPost(posts.documents);
      }
    } catch (error) {
      console.log("allPost error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) return <Loading />;
  if (post.length === 0)
    return (
      <p className="text-center text-green-400 py-6 font-[Poppins]">
        No post found
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-4 py-10 font-[Poppins] text-green-300">
      <div className="w-[80%] mx-auto">
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {post.map((eachPost, index) => (
            <motion.div
              key={eachPost.$id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border w-full border-green-800/30 rounded-2xl p-5 shadow-xl shadow-lime-400/10 hover:shadow-lime-400/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
            >
              {/* Author + Timestamp */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-800/30 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-lime-400 uppercase shadow">
                    {eachPost.author?.slice(0, 2) || "AN"}
                  </div>
                  <div className="text-sm text-green-500 font-medium">
                    {eachPost.author}
                  </div>
                </div>
                <span className="text-xs text-green-600 italic">
                  {new Date(eachPost.$createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Title + Content */}
              <Link to={`/post/${eachPost.$id}`}>
                <h3 className="text-xl font-bold text-green-300 hover:text-lime-400 transition duration-200 line-clamp-1">
                  <span className="mr-2 text-green-500">Title:</span>
                  {eachPost.title.slice(0, 15) + " ..."}
                </h3>
                <p className="text-green-500 text-sm mt-2 line-clamp-3">
                  {eachPost.content.slice(0,99) + ` ...`}
                </p>
              </Link>

              {/* View Button */}
              <div className="flex justify-around mt-5">
                <Link
                  to={`/post/${eachPost.$id}`}
                  className="text-lime-400 font-semibold hover:text-black hover:bg-lime-400 py-1 px-3 rounded transition"
                >
                  View
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default AllPost;
