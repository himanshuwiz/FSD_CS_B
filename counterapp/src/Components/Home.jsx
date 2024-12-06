import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/watch">StopWatch</Link>
        </li>
        <li>
          <Link to="/refex">RefExample</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
