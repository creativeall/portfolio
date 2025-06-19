import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
  const [navbarblur, setNavbarblur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavbarblur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const showMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
      <h1 title='Reload' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='Logo'>SB</h1>

      <div className='Hamburger' onClick={showMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className='NavbarLinks'>
        <li onClick={hideMenu}>
          <a href="#home"><AiOutlineHome /> Home</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#about"><BsPerson /> About</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#projects"><BsCodeSlash /> Projects</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#resume"><CgFileDocument /> Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
