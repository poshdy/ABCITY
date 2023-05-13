import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { styles } from "../styles";
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
    <section className="sticky top-1  z-50">
      <div
        className={
          scroll
            ? `${styles.container} flex items-center  bg-[#FA6A19] justify-around duration-300 ease-in-out rounded-full `
            : `${styles.container} duration-300 ease-in-out  py-2 flex items-center justify-between `
        }
      >
        <h1
          onClick={() => window.scrollTo(0, 0)}
          className={
            scroll
              ? `${styles.Text} text-black cursor-pointer py-1`
              : `${styles.Text} cursor-pointer`
          }
        >
          AB CITY
        </h1>

        <div className={`${styles.flex} hidden text-lg font-bold md:flex py-1`}>
          {NavLinks.map((link) => (
            <a className={scroll ? 'text-black' : 'text-gray-100'} key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
        <div className=" block md:hidden" onClick={() => setNav(!nav)}>
          <AiOutlineMenu className="text-white" size={20} />
        </div>
      </div>
      <div
        className={
          nav
            ? "w-full fixed top-0 bg-[#0b0b0b] flex flex-col gap-5  h-72 duration-500 ease-in-out"
            : "fixed duration-300 ease-in-out top-[100%]"
        }
      >
        <div className=" flex justify-between  p-3">
          <h1 className={`${styles.Text} cursor-pointer py-1`}>AB CITY</h1>
          <AiOutlineClose
            className="text-white"
            size={30}
            onClick={() => setNav(!nav)}
          />
        </div>
        <div
          className={` flex items-center flex-col gap-2 text-2xl font-bold justify-center text-gray-300 py-1`}
        >
          {NavLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
