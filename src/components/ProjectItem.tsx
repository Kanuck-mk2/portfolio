import { motion } from 'framer-motion';
import {
  projectTransition,
  projectVariants,
  projectHoverTap,
} from '../constants/animations';

interface ProjectItemProps {
  img: string;
  title: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ img, title, link }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      {...projectVariants}
      transition={projectTransition}
    >
      <motion.div {...projectHoverTap}>
        <div className="relative flex items-center justify-center h-auto w-full glow-border rounded-xl group hover:bg-black bg-opacity-100">
          <img
            src={img}
            alt="Portfolio Project"
            className="rounded-xl group-hover:opacity-10"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-gr font-nunito tracking-wider text-center">
              {title}
            </h3>

            <a href={link}>
              <p className="text-center p-3 mt-3 rounded-lg bg-black text-white font-bold cursor-pointer text-lg">
                View Project
              </p>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItem;
