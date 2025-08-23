import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DarkButton from "./components/DarkButton";
import { lazy, Suspense } from "react";

// import Archive from "./components/Archive";
const Archive = lazy(() => import("./components/Archive"));

function App() {
  return (
    <section>
      <DarkButton />
      <Header />
      <Main />
      <Suspense fallback={<p>Loading...</p>}>
        <Archive />
      </Suspense>
      <Footer />
    </section>
  );
}

export default App;
