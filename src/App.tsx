import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dice from "./components/pages/Dice";
import Top from "./components/pages/Top";

function App() {
  return (
    <div className="h-screen flex flex-col px-4 py-2">
      <header className="grow-0 pb-2">
        <h1>
          <Link to="/">Freks sample apps</Link>
        </h1>
      </header>
      <main className="grow pb-2">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="dice" element={<Dice />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </main>
      <footer className="grow-0">
        <a
          href="https://freks.jp"
          className="no-underline hover:underline"
        >
          <small>freks</small>
        </a>
      </footer>
    </div>
  );
}

export default App;
