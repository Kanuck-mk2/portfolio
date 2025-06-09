import { motion } from 'framer-motion';
import { skillTitles, } from '../constants/animations';
import { TextEffect } from '../constants/TextEffect';

interface SkillsSetProps {
  title: string;
  details: string;
  index: number;
}

const SkillsSet: React.FC<SkillsSetProps> = ({ title, details, index }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 3, type: 'spring' },
        }}
        whileHover={{ y: -20, scale: 1.1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-[850px] m-3 p-4 border-2 border-stone-200 bg-blue-400/10 backdrop-blur-lg rounded-lg"
      >
        <motion.p className="flex flex-wrap gap-4 flex-row items-center justify-center text-xs md:text-sm">
          <motion.span
            className="font-nunito text-lg font-semibold text-white"
            {...skillTitles}
          >
            {title}
          </motion.span>
        </motion.p>

        <motion.div className="my-2 text-base font-normal text-white">
          <TextEffect words={details} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsSet;
