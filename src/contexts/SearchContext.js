import { createContext, useContext, useState } from "react";
import { usePosts } from "./PostsContext";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const { posts } = usePosts();

  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchedPosts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("useSearch must be used inside SearchProvider!");

  return context;
}

export { SearchProvider, useSearch };
