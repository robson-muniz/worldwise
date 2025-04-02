import React from 'react';
import {Link} from "react-router-dom";
import PageNav from "../components/PageNav.jsx";

function Homepage() {
  return (
    <div>
      <PageNav/>
      <h1>Homepage</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;