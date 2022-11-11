import React from "react";
import { Link } from "../atoms/Link";

export default function TopPage() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        <li>
          <Link to="/dice">Dice</Link>
        </li>
        <li>
          <Link to="/api">Api sandbox</Link>
        </li>
      </ul>
    </>
  );
}
