import ProjectItem from './ProjectItem';
import burgerWebsiteImg from '../assets/burger-website.png';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-black border-2 rounded-md w-full m-auto md:pl-20 p-4 py-16 relative z-10"
    >
      <motion.h1
        className="text-4xl font-nunito font-bold text-center text-white"
        initial={{ opacity: 0, x: -500, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { type: 'spring' },
        }}
        transition={{ type: 'spring' }}
        whileTap={{ rotate: 360 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-center text-white py-8"
        initial={{ opacity: 0, x: 500, y: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { type: 'spring' },
        }}
        whileHover={{ scale: 1.05 }}
      >
        Utilizing my skill set and approach, I've applied these principles to
        the projects I've created so far. This involves integrating creativity,
        problem-solving, and technical expertise to develop visually trending
        designs. <br className="mb-4" /> By leveraging modern web development
        tools like React, Vite, TypeScript, and Framer Motion, I've crafted
        innovative projects that push the boundaries of web design and
        development, staying ahead of visual trends and delivering captivating
        UI/UX experiences.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols gap-12">
        <ProjectItem
          img={burgerWebsiteImg}
          title="Burger Restaurant Website Layout"
          link="/"
        />
        {/*add another ProjectItem component here */}
      </div>
    </div>
  );
}
