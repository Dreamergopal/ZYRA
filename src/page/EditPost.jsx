import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import SERVICE from "../appwrite/Services";
import Input from "../component/Input";

function EditPost() {
  const [error, setError] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    SERVICE.getPost(slug).then((data) => {
      const { title, content } = data;
      reset({ title, content });
    });
  }, [slug, reset]);

  const edit = async (data) => {
    setError("");
    const { title, content } = data;
    try {
      await SERVICE.updatePost(slug, { title, content });
      navigate(`/post/${slug}`);
    } catch (error) {
      console.log("editpost" + error.message);
      setError("Update failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4 font-[Poppins]">
      <section className="w-full max-w-lg bg-zinc-900 border border-green-800/40 rounded-2xl shadow-lg shadow-lime-400/10 p-8 text-green-300">
        <h2 className="text-2xl font-extrabold text-lime-400 text-center mb-4 tracking-wide">
          Edit Your Chronicle
        </h2>

        {error && (
          <div className="text-sm text-red-500 bg-red-900/20 border border-red-500 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(edit)} className="space-y-5">
          <Input
            label="Title"
            className="bg-black border border-green-700/40 text-green-200 placeholder:text-green-500"
            {...register("title", { required: true })}
          />

          <div>
            <label className="block mb-1 font-medium text-sm text-green-400">
              Content
            </label>
            <textarea
              className="w-full bg-black border border-green-700/40 text-green-200 placeholder:text-green-500 p-3 rounded-xl"
              rows="6"
              placeholder="Write your chronicle here..."
              {...register("content", { required: true })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-bold py-2 rounded-xl shadow hover:bg-lime-400 transition"
          >
            Update Post
          </button>
        </form>
      </section>
    </div>
  );
}

export default EditPost;



