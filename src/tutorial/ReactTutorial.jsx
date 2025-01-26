import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home"
import Lister from "./Lister"

function ReactTutorial() {

  const title = "This is the title of the page."
  const likes = 59;
  const link = "https://www.youtube.ca"

  return(
    <div className="blog">
      <h1>{title}</h1>
      <Navbar/>
      <div className="content">
        <Home/>
        <Lister/>
      </div>
    </div>
  );
}

export default ReactTutorial;