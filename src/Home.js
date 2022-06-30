import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>MY Projects</h1>
      <h3>
        <li>
          <Link to="/coffee">Coffee APP</Link>
        </li>
      </h3>
    </div>
  );
}
