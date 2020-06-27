import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function handleClick() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-user-color-scheme", newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-user-color-scheme", theme);
  }, [theme]);

  return (
    <div className="App">
      <h1>Heading</h1>
      <p>This is the text that goes here!</p>
      <button onClick={handleClick}>Dark Mode</button>
    </div>
  );
}

export default App;
