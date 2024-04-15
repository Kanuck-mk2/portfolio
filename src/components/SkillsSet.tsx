import { motion } from 'framer-motion';

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
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
        >
          <motion.span
            className="inline-block px-2 py-1 font-semibold text-white gradient-bg rounded-md"
            initial={{ opacity: 1, scale: 9.0 }}
            whileInView={{
              opacity: 1,
              rotate: 720,
              scale: 1.0,
              transition: { duration: 5, type: 'spring' },
            }}
            viewport={{ once: true }}
            whileHover={{ rotate: 360, scale: 2.5 }}
          >
            {year}
          </motion.span>

          <motion.span
            className=" font-nunito text-lg font-semibold text-white"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.1 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1.0,
              transition: { duration: 3, type: 'spring' },
            }}
            viewport={{ once: true }}
          >
            {title}
          </motion.span>

          <motion.span
            className="my-1 text-sm font-normal leading-none text-white"
            initial={{ opacity: 0, x: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 3, type: 'spring' },
            }}
            viewport={{ once: true }}
          >
            {duration}
          </motion.span>
        </motion.p>

        <motion.p
          className="my-2 text-base font-normal text-white "
          initial={{ opacity: 0, x: 500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring', duration: 2 },
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
          }}
        >
          {details}
        </motion.p>
      </li>
    </ol>
  );
};

export default SkillsSet;
