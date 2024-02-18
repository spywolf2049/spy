function CategoryFilter({ CATEGORIES, setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li>
          <button
            className="mb-4 w-full rounded-full bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 p-[2px]"
            onClick={() => setCurrentCategory("all")}
          >
            <span className="block px-4 py-2 font-semibold tracking-widest text-white uppercase rounded-full hover:text-black hover:bg-white">
              All
            </span>
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <button
              className={`mb-4 w-full rounded-full p-[2px] ${cat.color}`}
              onClick={() => setCurrentCategory(cat.name)}
            >
              <span className="block px-4 py-2 font-semibold tracking-widest text-white uppercase rounded-full hover:bg-white hover:text-black">
                {cat.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
