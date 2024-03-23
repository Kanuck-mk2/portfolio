import { motion, Transition, Variants } from 'framer-motion';

interface ProjectItemProps {
  img: string;
  title: string;
  link: string;
}

const transition: Transition = {
  duration: 3,
  type: 'spring',
};

const variants: Variants = {
  initial: { opacity: 0, x: 0, y: -500 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 720 },
};

const customHoverVariants: Variants = {
  hover: { y: -30, rotate: -10 },
};

const ProjectItem: React.FC<ProjectItemProps> = ({ img, title, link }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
      transition={transition}
    >
      <motion.div variants={customHoverVariants} whileTap={{ scale: 0.5 }}>
        <div className="relative flex  items-center justify-center h-auto w-full glow-border rounded-xl group hover:bg-black bg-opacity-100">
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
