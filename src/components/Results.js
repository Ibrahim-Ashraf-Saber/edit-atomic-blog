import { useSearch } from "../contexts/SearchContext";

function Results() {
  const { searchedPosts: posts } = useSearch();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
