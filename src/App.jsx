import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Challenge from "./components/Challenge";

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <div className="challenges-grid">
          <Challenge title="EASY" time={1} />
          <Challenge title="NOT EASY" time={5} />
          <Challenge title="GETTING TOUGH" time={10} />
          <Challenge title="PROS ONLY" time={15} />
        </div>
      </div>
    </>
  );
}

export default App;
