import { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { motion } from 'framer-motion';

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
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4  md:hidden text-white z-[999]"
        size={25}
      />
      {nav && (
        <div className="fixed w-full h-screen flex flex-col justify-center items-center z-20">
          <a
            href="#hero"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 glow-border"
            onClick={handleLinkClick}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 glow-border"
            onClick={handleLinkClick}
          >
            <BsPerson size={20} />
            <span className="pl-4">My Story</span>
          </a>
          <a
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 glow-border"
            onClick={handleLinkClick}
          >
            <GrProjects size={20} />
            <span className="pl-4">Skills & Experience</span>
          </a>
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 glow-border"
            onClick={handleLinkClick}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 glow-border"
            onClick={handleLinkClick}
          >
            <AiOutlineMail size={20} />

            <span className="pl-4">Contact & Resume</span>
          </a>
        </div>
      )}

      <div className="md:block hidden fixed top-[25%] z-[999]">
        <div className="flex flex-col">
          <motion.a
            href="#hero"
            className="rounded-full  text-white bg-black m-2 p-4 cursor-pointer  glow-border"
            initial={{ opacity: 0, x: -500, y: 300 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
            }}
            transition={{ duration: 4, type: 'spring' }}
            whileTap={{ scale: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }}>
              <AiOutlineHome size={20} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#about"
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
            whileTap={{ scale: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }}>
              <BsPerson size={20} />
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
            whileTap={{ scale: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }}>
              <GrProjects size={20} />
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
            whileTap={{ scale: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }}>
              <AiOutlineProject size={20} />
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
            whileTap={{ scale: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }}>
              <AiOutlineMail size={20} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
