import { useSearch } from "../contexts/SearchContext";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

function Main() {
  const { searchedPosts: posts } = useSearch();

  return (
    <main>
      <FormAddPost />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
