"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.dataset.theme = storedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">
          MySite
        </Link>

        <nav className="header__nav">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Search */}
        <form className="header__search" role="search">
          <input
            type="search"
            placeholder="Search…"
            aria-label="Search"
          />
        </form>

        {/* Theme toggle */}
        <button
          className="header__theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
