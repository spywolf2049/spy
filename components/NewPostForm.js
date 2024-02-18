"use client";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

function NewPostForm({ setPosts, setShowForm, CATEGORIES }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("society");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (text && category && text.length <= 200) {
      setIsUploading(true);
      const { data: newPost, error } = await supabase
        .from("posts")
        .insert([{ text, category }])
        .select();
      setIsUploading(false);

      if (!error) setPosts((posts) => [newPost[0], ...posts]);
      setText("");
      setCategory("");
      setShowForm(false);
    }
  }
  return (
    <form
      className="flex flex-col items-stretch gap-4 px-8 py-4 mb-10 bg-gray-200 lg:items-center lg:flex-row rounded-xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-grow py-2 pl-4 text-lg rounded-full"
        placeholder="Share your thoughts"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span className="ml-auto text-lg font-semibold lg:mr-10">
        {200 - text.length}
      </span>
      <select
        value={category}
        className="p-2 text-lg bg-white rounded-full"
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button
        className="inline-block flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]"
        disabled={isUploading}
      >
        <span className="block px-4 py-2 text-lg font-bold tracking-wider text-white uppercase rounded-full hover:text-black hover:bg-gray-200">
          Post
        </span>
      </button>
    </form>
  );
}

export default NewPostForm;
