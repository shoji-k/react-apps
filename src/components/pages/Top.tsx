import React from "react";
import { Link } from "react-router-dom";

export default function Top() {
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
