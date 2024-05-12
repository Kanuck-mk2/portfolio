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
  homeAnimation,
  navMenuAnimation,
  navMenuItemAnimation,
} from '../constants/animations';

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
              <motion.a
                key={index}
                href={`#${label.toLowerCase()}`}
                className="w-[75%] flex justify-center items-center rounded-full text-white bg-black m-2 p-4 cursor-pointer glow-border border-2 border-sky-500"
                {...navMenuItemAnimation(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.5 }}
                onClick={handleLinkClick}
              >
                {/* Render appropriate icon based on index */}
                {index === 0 && <AiOutlineHome size={20} />}
                {index === 1 && <BsPerson size={20} />}
                {index === 2 && <GrProjects size={20} />}
                {index === 3 && <AiOutlineProject size={20} />}
                {index === 4 && <AiOutlineMail size={20} />}
                {/* Example text */}
                <span className="pl-4">{label}</span>
              </motion.a>
            ),
          )}
        </div>
      )}

      <div className="md:block hidden fixed top-[25%] z-[999]">
        <div className="flex flex-col">
          <motion.a
            href="#home"
            className="rounded-full  text-white bg-black m-2 p-4 cursor-pointer  glow-border"
            {...homeAnimation}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.5 }}
            >
              <AiOutlineHome size={25} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#about"
            className="rounded-full   text-white grad-bg4 m-2 p-4 cursor-pointer   glow-border"
            {...aboutAnimation}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.5 }}
            >
              <BsPerson size={25} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#skills"
            className="rounded-full  text-white bg-black m-2 p-4 cursor-pointer   glow-border"
            initial={{ opacity: 0, x: 500, y: -300 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
            }}
            transition={{ duration: 4, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.5 }}
            >
              <GrProjects size={25} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#projects"
            className="rounded-full   text-white bg-black m-2 p-4 cursor-pointer  glow-border"
            initial={{ opacity: 0, x: -500, y: -300 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
            }}
            transition={{ duration: 4, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.5 }}
            >
              <AiOutlineProject size={25} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full   text-white bg-black m-2 p-4 cursor-pointer   glow-border"
            initial={{ opacity: 0, x: 500, y: 300 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
            }}
            transition={{ duration: 4, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.5 }}
            >
              <AiOutlineMail size={25} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
