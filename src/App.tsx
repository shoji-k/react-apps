import { Link, Route, Routes } from "react-router-dom";
import ApiPage from "./components/pages/api";
import DicePage from "./components/pages/dice";
import TopPage from "./components/pages/top";
import { useTracking } from "./lib/hooks/useTracking";

function App() {
  useTracking();

  return (
    <div className="container mx-auto h-screen flex flex-col px-4 py-2">
      <header className="grow-0 pb-2">
        <h1>
          <Link to="/">Freks apps</Link>
        </h1>
      </header>
      <main className="grow pb-2">
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="api" element={<ApiPage />} />
          <Route path="dice" element={<DicePage />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </main>
      <footer className="grow-0">
        <a href="https://freks.jp" className="no-underline hover:underline">
          <small>Copyright freks</small>
        </a>
      </footer>
    </div>
  );
}

export default App;
