import ProjectItem from './ProjectItem';
import nikeCloneImg from '../assets/nike-clone.png';
import gymWebsiteImg from '../assets/gym-website.png';
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
      className="bg-slate-700 border-t-2 border-sky-700 w-full m-auto md:pl-20 p-4 py-16 relative z-10"
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
          img={nikeCloneImg}
          title="Nike Landing Page Clone"
          link="https://nike-clone-hazel.vercel.app/"

        />
        <ProjectItem
          img={gymWebsiteImg}
          title="Gym Website Concept"
          link="https://gym-website-chi-ashen.vercel.app/"
        />
        {/*add another ProjectItem component here */}
      </motion.div>
    </div>
  );
}
