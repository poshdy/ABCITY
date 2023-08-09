import React, { useEffect, useState } from "react";

import { NavLinks } from "../Constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    return window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex items-center justify-between bg-white  p-1">
        <h1 className="text-3xl font-bold">ABCITY</h1>
        <div
          className={`text-sm flex items-center gap-3 font-semibold text-black`}
        >
          {NavLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        <h3 className="border-2 rounded-full border-black px-3 py-1">Join us</h3>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
