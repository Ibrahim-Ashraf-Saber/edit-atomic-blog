import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const PostsContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostsProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleAddPost,
        handleClearPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined)
    throw new Error("usePosts must be used inside PostsProvider!");

  return context;
}

export { PostsProvider, usePosts };
