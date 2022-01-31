import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        <li>
          <Link to="/dice">Dice</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
