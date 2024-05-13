import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import {
  aboutAnimation,
  contactAnimation,
  homeAnimation,
  hoverTap,
  navMenuAnimation,
  projectsAnimations,
  skillsAnimation,
} from '../constants/animations';

import NavItem from './navItem';

export default function Sidenav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log('Toggling nav state');
    setNav(!nav);
  };

  const handleLinkClick = () => {
    console.log('Closing menu');
    setNav(false);
  };

  return (
    <div>
      <motion.div
        className="fixed top-4 right-4 md:hidden text-white z-[999]"
        {...navMenuAnimation}
      >
        <AiOutlineMenu onClick={handleNav} size={25} />
      </motion.div>

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

      <div className="flex flex-row justify-center items-center top-0 w-full h-16 bg-gray-800/50 text-white text-xl font-bold md:hidden fixed z-[999]">
        <motion.a
          href="#home"
          className="rounded-full text-white bg-black m-2 p-4 cursor-pointer glow-border"
          {...homeAnimation}
        >
          <motion.div {...hoverTap}>
            <AiOutlineHome size={25} />
          </motion.div>
        </motion.a>
        <motion.a
          href="#about"
          className="rounded-full text-white grad-bg4 m-2 p-4 cursor-pointer glow-border"
          {...aboutAnimation}
        >
          <motion.div {...hoverTap}>
            <BsPerson size={25} />
          </motion.div>
        </motion.a>
        <motion.a
          href="#skills"
          className="rounded-full text-white bg-black m-2 p-4 cursor-pointer glow-border"
          {...skillsAnimation}
        >
          <motion.div {...hoverTap}>
            <GrProjects size={25} />
          </motion.div>
        </motion.a>
        <motion.a
          href="#projects"
          className="rounded-full text-white bg-black m-2 p-4 cursor-pointer glow-border"
          {...projectsAnimations}
        >
          <motion.div {...hoverTap}>
            <AiOutlineProject size={25} />
          </motion.div>
        </motion.a>
        <motion.a
          href="#contact"
          className="rounded-full text-white bg-black m-2 p-4 cursor-pointer glow-border"
          {...contactAnimation}
        >
          <motion.div {...hoverTap}>
            <AiOutlineMail size={25} />
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
}
