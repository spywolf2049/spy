"use client";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import PostList from "../components/PostList";
import NewPostForm from "../components/NewPostForm";
import Loader from "@/components/Loader";

const CATEGORIES = [
  { name: "random", color: "bg-cyan-500" },
  { name: "university", color: "bg-blue-500" },
  { name: "venting", color: "bg-violet-500" },
  { name: "confessions", color: "bg-fuchsia-500" },
  { name: "relationships", color: "bg-pink-500" },
];

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);
      let query = supabase.from("posts").select("*");
      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);
      let { data: posts, error } = await query
        .order("upvotes", { ascending: false })
        .limit(1000);
      if (!error) setPosts(posts);
      else alert("Error loading data");
      setIsLoading(false);
    }
    getPosts();
  }, [currentCategory]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm ? (
        <NewPostForm
          setPosts={setPosts}
          setShowForm={setShowForm}
          CATEGORIES={CATEGORIES}
        />
      ) : null}
      <main className="grid md:grid-cols-[250px,1fr] gap-12 grid-cols-1">
        <CategoryFilter
          CATEGORIES={CATEGORIES}
          setCurrentCategory={setCurrentCategory}
        />
        {IsLoading ? (
          <Loader />
        ) : (
          <PostList posts={posts} setPosts={setPosts} CATEGORIES={CATEGORIES} />
        )}
      </main>
    </div>
  );
}
