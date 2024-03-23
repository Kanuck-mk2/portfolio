import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

const About: React.FC = () => {
  const imageAssets: string[] = [
    './profile/shawn1.webp',
    './profile/shawn-side.jpg',
    './profile/shawn2.webp',
    './profile/shawn4.webp',
    './profile/shawn5.webp',
  ];

  return (
    <div
      id="about"
      className="border-2 w-full m-auto md:pl-20 p-4 py-16  relative rounded-lg gradient-bg"
    >
      <motion.h1
        className="font-nunito font-bold text-4xl text-center text-white mt-10 mb-5"
        initial={{ opacity: 0, x: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { type: 'spring', stiffness: 100 },
        }}
        whileTap={{ rotate: 360 }}
      >
        My Story
      </motion.h1>

      <div className="flex flex-col md:flex-row  justify-between items-center ">
        <div className=" w-full md:w-2/4 rounded-lg p-2 flex justify-center ">
          <motion.div
            initial={{ opacity: 0, x: -400, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
              transition: { type: 'spring', duration: 2 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5, rotate: 360 }}
            >
              <ImageSlider imageAssets={imageAssets} />
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="text-slate-200 flex flex-col justify-start 
          overflow-x-hidden md:w-2/3 p-4 mt-4"
          initial={{ opacity: 0, x: 500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{ type: 'spring' }}
          whileHover={{
            scale: 1.1,
          }}
        >
          I grew up in Edmonton, Alberta, surrounded by the sprawling landscapes
          of Western Canada. It wasn't until I reached the age of 38 that I
          stumbled upon the captivating world of coding. This discovery marked a
          significant turning point in my life, leading me down a path filled
          with endless possibilities and exciting opportunities in the realm of
          technology.
          <br className="mt-3" />
          As a self-learner, I've embarked on a journey of exploration and
          discovery in the field of coding. While I may still be new to this
          fascinating domain, my enthusiasm and determination to learn are
          boundless. Each coding challenge I encounter is an opportunity for
          growth, and I approach every obstacle with a willingness to learn and
          adapt.
          <br className="mt-3" />
          Despite being at the beginning of my coding journey, I am eager to
          absorb knowledge, tackle new challenges, and collaborate with fellow
          developers to expand my skills and contribute meaningfully to the
          ever-evolving world of technology.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
