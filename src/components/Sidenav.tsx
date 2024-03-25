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
    setNav((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={nav ? handleLinkClick : handleNav}
        className="fixed top-4 right-4 md:hidden text-white z-[999]"
        size={25}
      />
      {nav && (
        <div className="fixed w-full h-screen sm:hidden flex flex-col justify-center items-center z-[999]">
          <motion.a
            href="#hero"
            className="w-[75%] flex justify-center items-center rounded-full  text-white bg-black 
            m-2 p-4 cursor-pointer glow- border-2 border-blue-400"
            initial={{ opacity: 0, x: 500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            onClick={handleLinkClick}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </motion.a>
          <motion.a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full  text-white bg-black  
            m-2 p-4 cursor-pointer glow-border border-2 border-blue-400"
            initial={{ opacity: 0, x: -500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.7 }}
            onClick={handleLinkClick}
          >
            <BsPerson size={20} />
            <span className="pl-4">My Story</span>
          </motion.a>
          <motion.a
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full  text-white bg-black 
             m-2 p-4 cursor-pointer  glow-border border-2 border-blue-400"
            initial={{ opacity: 0, x: 500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.9 }}
            onClick={handleLinkClick}
          >
            <GrProjects size={20} />
            <span className="pl-4">Skills & Experience</span>
          </motion.a>
          <motion.a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full  text-white bg-black  
            m-2 p-4 cursor-pointer  glow-border border-2 border-blue-400"
            initial={{ opacity: 0, x: -500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 1.1 }}
            onClick={handleLinkClick}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full  text-white bg-black  
            m-2 p-4 cursor-pointer glow-border border-2 border-blue-400"
            initial={{ opacity: 0, x: 500, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 1.3 }}
            onClick={handleLinkClick}
          >
            <AiOutlineMail size={20} />

            <span className="pl-4">Contact & Resume</span>
          </motion.a>
        </div>
      )}

      {/*Desktop Menu mode */}

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
