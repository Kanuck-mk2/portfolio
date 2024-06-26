import ProjectItem from './ProjectItem';
import burgerWebsiteImg from '../assets/burger-website.png';
import nikeCloneImg from '../assets/nike-clone.png';
import { motion } from 'framer-motion';
import {
  projectLayout,
  projectText,
  projectTitle,
} from '../constants/animations';

export default function Projects() {
  return (
    <div
      id="projects"
      className="gradient-bg border-t-2 w-full m-auto md:pl-20 p-4 py-16 relative z-10"
    >
      <motion.h1
        className="text-4xl font-nunito font-bold text-center text-white"
        {...projectTitle}
      >
        Projects
      </motion.h1>

      <motion.p className="text-center text-white py-8" {...projectText}>
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
        {...projectLayout}
      >
        <ProjectItem
          img={burgerWebsiteImg}
          title="Burger Restaurant Website Layout"
          link="/"
        />
        <ProjectItem
          img={nikeCloneImg}
          title="Nike Landing Page Clone"
          link="/"
        />
        {/*add another ProjectItem component here */}
      </motion.div>
    </div>
  );
}
