import { useState } from "react";
import Navbar from "./components/navbar";
import SplitTextTitle from "./components/navbar/SplitText";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />

      <SplitTextTitle
        text="Hello, GSAP!"
        className="text-2xl font-semibold text-center"
      />
    </div>
  );
}

export default App;
