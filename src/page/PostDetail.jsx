import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SERVICE from "../appwrite/Services";
import { useSelector } from "react-redux";
import Loading from "../component/Loading";

function PostDetail() {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { slug } = useParams();
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const fetch = async () => {
      const getpost = await SERVICE.getPost(slug);
      if (getpost) {
        setPost(getpost);
        if (user?.$id !== getpost.userId) {
          await SERVICE.updatePost(slug, {
            views: getpost.views + 1,
          });
        }
      }
    };
    fetch();
  }, [slug, user]);

  const handleEdit = () => {
    navigate(`/edit-post/${slug}`);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Sure you want to delete this post?");
    if (confirmDelete) {
      const success = await SERVICE.deletePost(slug);
      if (success) navigate("/all-post");
    }
  };

  if (!post?.author || post?.views === undefined) {
    return <Loading />;
  }

  return (
    <div className="max-h-fit bg-gradient-to-br from-black via-zinc-900 to-black px-4 py-10 font-[Poppins] flex justify-center">
      <div className="w-full max-w-md bg-zinc-900 border border-green-800/40 rounded-2xl shadow-xl shadow-lime-400/10 p-6 md:p-10 text-green-300">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-sm text-lime-400 mb-1">Title {" : "}
          <span className="text-2xl font-extrabold text-green-400 tracking-wide break-words">
            {post.title}
          </span>
          </h2>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-sm text-lime-400 mb-1">Content : {" "}</h2>
          <p className="whitespace-pre-line text-green-400 text-sm leading-relaxed break-words">
            {post.content}
          </p>
        </div>

        {/* Meta */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-t border-green-700 pt-4 text-green-600 text-sm">
          <span>
            <strong className="text-lime-300">Author : {" "}</strong> {post?.author.toUpperCase()}
          </span>
          <span>
            <strong className="text-lime-300">Views:</strong> {post?.views}
          </span>
        </div>

        {/* Buttons */}
        {user && user.$id === post.userId && (
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleEdit}
              className="bg-lime-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-lime-400 transition"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-400 transition"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
