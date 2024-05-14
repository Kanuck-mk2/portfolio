import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NavItem from './navItem';
import { motion } from 'framer-motion';
import { navFade } from '../constants/animations';

export default function Sidenav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div>
      <div className="fixed top-4 right-4 md:hidden text-white z-[999]">
        <AiOutlineMenu onClick={handleNav} size={25} />
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <div className="fixed w-full h-screen sm:hidden flex flex-col justify-center items-center z-[999]">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
            (label, index) => (
              <NavItem
                key={index}
                label={label}
                index={index}
                onClick={handleLinkClick}
              />
            ),
          )}
        </div>
      )}

      <motion.div
        className="flex flex-row justify-center items-center top-0 w-full h-16 bg-slate-400/80 backdrop-filter backdrop-blur-lg text-white text-xl font-bold fixed z-[999]"
        {...navFade}
      >
        <a href="#home" className="m-2 p-4 cursor-pointer  ">
          Home
        </a>
        <a
          href="#about"
          className="m-2 p-4 cursor-pointer glow-border rounded-full"
        >
          About
        </a>
        <a
          href="#skills"
          className="m-2 p-4 cursor-pointer glow-border rounded-full"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="m-2 p-4 cursor-pointer glow-border rounded-full"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="m-2 p-4 cursor-pointer glow-border rounded-full"
        >
          Contact
        </a>
      </motion.div>
    </div>
  );
}
