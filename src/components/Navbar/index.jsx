import React from "react";

export default function Navbar({ logo, children }) {
  return (
    <header>
      <nav className="navbar">
      <h2> Hashmath's Marvel</h2>
        {logo}
      
        <ul>{children}</ul>
      </nav>
    </header>
  );
}