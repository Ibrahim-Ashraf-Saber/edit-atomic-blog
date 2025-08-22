import { usePosts } from "../contexts/PostsContext";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

function Header() {
  const { handleClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
