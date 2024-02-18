"use client";
import { useState } from "react";

function Header({ showForm, setShowForm }) {
  return (
    <header className="flex flex-col items-stretch justify-between gap-4 p-3 mb-10 md:items-center md:flex-row">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <img src="/logo.png" alt="logo" className="w-16 h-16" />
        <h1 className="text-5xl text-center uppercase font-caprasimo">
          Anonymouse Board
        </h1>
      </div>

      <button
        className="flex-shrink-0 inline-block text-white rounded-full hover:bg-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]"
        onClick={() => setShowForm((show) => !show)}
      >
        <span className="block px-4 py-2 text-xl font-black tracking-wider uppercase rounded-full hover:text-black hover:bg-white">
          {showForm ? "Close" : "Create Post"}
        </span>
      </button>
    </header>
  );
}

export default Header;
