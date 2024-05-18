import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NavItem from './navItem';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { navLinkVariants, slideDown } from '../constants/animations';

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
        className="hidden md:flex flex-row justify-center items-center top-0 w-full h-16 bg-slate-400/10 backdrop-filter backdrop-blur-lg text-slate-300 text-xl   rounded-sm fixed z-[999]"
        {...slideDown}
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="m-2 p-4 font-nunito font-bold cursor-pointer hover:text-sky-500 duration-200 ease-in-out"
            initial="hidden"
            animate="visible"
            variants={navLinkVariants}
            transition={{ staggerChildren: 0.3 }}
          >
            {link.text}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
