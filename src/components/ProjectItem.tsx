import { motion, useAnimation } from 'framer-motion';

interface ProjectItemProps {
  img: string;
  title: string;
  link: string;
}

const sheenVariants = {
  initial: { x: '-550%' },
  animate: { x: '550%' },
};

const ProjectItem: React.FC<ProjectItemProps> = ({ img, title, link }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="relative w-[450px] rounded-xl overflow-hidden group cursor-pointer"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onHoverStart={() => controls.start('animate')}
      onHoverEnd={() => controls.start('initial')}
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-auto rounded-xl object-cover transition-opacity duration-300 group-hover:opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-xl text-white p-6">
        <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            View Project
          </button>
        </a>
      </div>

      {/* Sheen effect */}
      <motion.div
        variants={sheenVariants}
        initial="initial"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ transform: 'skewX(-20deg)' }}
      />
    </motion.div>
  );
};

export default ProjectItem;
