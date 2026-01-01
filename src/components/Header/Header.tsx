"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import './Header.scss';

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
      <div className="header__inner | container">
        <Link href="/" className="header__logo">
          <Image
            src="/images/logo.png"
            alt="meta blog"
            width={158}
            height={36}
            className="header__logo-image"
          />
        </Link>

        <nav className="header__nav">
          <Link className="header__nav-link" href="/about">About</Link>
          <Link className="header__nav-link" href="/blog">Blog</Link>
          <Link className="header__nav-link" href="/contact">Contact</Link>
        </nav>

        <div className="header__right">
          {/* Search */}
          <form className="header__search" role="search">
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
