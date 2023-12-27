import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      Homepage
      <br />
      <Link to={"/about"}>About'a Git</Link>
    </div>
  );
}
