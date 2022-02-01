import React from "react";
import { Route, Routes } from "react-router-dom";
import Dice from "./components/pages/Dice";
import Top from "./components/pages/Top";

function App() {
  return (
    <>
      <header>
        <h1>Freks sample apps</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="dice" element={<Dice />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
