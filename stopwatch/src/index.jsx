import React from "react";
import { createRoot } from "react-dom/client";

import Stopwatch from "./stopwatch";

function App() {
  return (
    <div className="App">
      <Stopwatch />
      <footer>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "13px",
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "10px",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
          }}
        >
          &copy; Musharraf Hussain 2023 - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
