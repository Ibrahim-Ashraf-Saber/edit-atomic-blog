import React from "react";
import ReactDOM from "react-dom/client";
import { PostsProvider } from "./contexts/PostsContext";
import { SearchProvider } from "./contexts/SearchContext";
import App from "./App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </PostsProvider>
  </React.StrictMode>
);
