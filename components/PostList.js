import Post from "./Post";

function PostList({ posts, setPosts, CATEGORIES }) {
  if (posts.length === 0) {
    return (
      <p className="text-xl text-center ">⚠️ No Posts. Create the first one!</p>
    );
  }
  return (
    <section>
      <ul>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            setPosts={setPosts}
            CATEGORIES={CATEGORIES}
          />
        ))}
      </ul>
      {/* <p className="text-center text-gray-500 ">
        There are {posts.length} posts. Add your own!
      </p> */}
    </section>
  );
}

export default PostList;
