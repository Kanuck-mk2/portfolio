import ProjectItem from './ProjectItem';
import burgerWebsiteImg from '../assets/burger-website.png';
import { motion } from 'framer-motion';
import { projectTitle } from '../constants/animations';

export default function Projects() {
  return (
    <div
      id="projects"
      className="gradient-bg3 border-2 rounded-md w-full m-auto md:pl-20 p-4 py-16 relative z-10"
    >
      <motion.h1
        className="text-4xl font-nunito font-bold text-center text-white"
        {...projectTitle}
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
          transition: { duration: 3, type: 'spring' },
        }}
        viewport={{ once: true }}
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

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols gap-12"
        initial={{ opacity: 0, x: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 3, type: 'spring' },
        }}
        viewport={{ once: true }}
      >
        <ProjectItem
          img={burgerWebsiteImg}
          title="Burger Restaurant Website Layout"
          link="/"
        />
        {/*add another ProjectItem component here */}
      </motion.div>
    </div>
  );
}
