import React, { useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div>
        <ul className="list">
          <li>Home</li>
          <li>about</li>
          <li>login</li>
          <li>help</li>
        </ul>
      </div>
      <h1 className="text">Theme Dark</h1>
      <p className="text">Light-on-dark color scheme—also called black mode, dark mode,
        dark theme or night mode—is a color scheme that uses light-colored text, icons, and
        graphical user interface elements on a dark background and is often discussed in terms
        of computer user interface design and web design
      </p>
      <button className="btn"  onClick={() => setDark(!dark)}>Dark Mode</button>
    </div>
  )
}

export default DarkMode;