import { motion } from 'framer-motion';
import {
  skillDetail,
  skillDuration,
  skillTitles,
  skillYear,
} from '../constants/animations';

interface SkillsSetProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const SkillsSet: React.FC<SkillsSetProps> = ({
  year,
  title,
  duration,
  details,
}) => {
  return (
    <ol className="flex flex-col mt-5 md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4 ">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <motion.p
          className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm"
          whileInView={{ opacity: 1 }}
        >
          <motion.span
            className="inline-block px-2 py-1 font-semibold text-white gradient-bg rounded-md"
            {...skillYear}
          >
            {year}
          </motion.span>

          <motion.span
            className=" font-nunito text-lg font-semibold text-white"
            {...skillTitles}
          >
            {title}
          </motion.span>

          <motion.span
            className="my-1 text-sm font-normal leading-none text-white"
            {...skillDuration}
          >
            {duration}
          </motion.span>
        </motion.p>

        <motion.p
          className="my-2 text-base font-normal text-white "
          {...skillDetail}
        >
          {details}
        </motion.p>
      </li>
    </ol>
  );
};

export default SkillsSet;
