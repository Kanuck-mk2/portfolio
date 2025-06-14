import { motion } from 'framer-motion';
import { skillTitle } from '../constants/animations';
import SkillsSet from './SkillsSet';
import { skillsData } from '../constants';

export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-slate-700 border-t-2 border-sky-700  w-full m-auto md:pl-20 p-4 py-16 relative z-10"
    >
      <motion.h1
        className="text-4xl p-4 font-nunito font-bold text-center text-white"
        {...skillTitle}
      >
        Skills and Experience
      </motion.h1>

      {skillsData.map((item, idx) => (
        <SkillsSet key={idx} index={idx} title={item.title} details={item.details} />
      ))}
    </div>
  );
}
