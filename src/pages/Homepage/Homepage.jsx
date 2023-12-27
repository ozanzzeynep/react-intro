import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <button className="btn btn-primary">Homepage</button>
      <br />
      <Link to={"/about"}>About</Link>
    </div>
  );
}
