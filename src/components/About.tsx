import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

const About = () => {
  const imageAssets = [
    './profile/shawn-side.jpg',
    './profile/profile.jpg',
    './profile/shawn-posing.jpg',
    './profile/shawn2.webp',
    './profile/shawn-sing.jpg',
  ];

  return (
    <div
      id="about"
      className="border-2 w-full m-auto md:pl-20 p-4 py-16  relative rounded-lg bg-gradient-to-br  from-blue-500 to-slate-500"
    >
      <motion.h1
        className="font-nunito font-bold text-4xl text-center mt-10 
      text-white"
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
      <div className="flex flex-col md:flex-row  justify-between">
        <div className="w-full md:w-1/3 rounded-lg  border-slate-500 m-4 p-2">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -200, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
              transition: { type: 'spring', stiffness: 100, duration: 2 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5, rotate: 360 }}
            >
              <ImageSlider imageAssets={imageAssets} />
            </motion.div>
          </motion.div>

          <motion.div
            className="md:hidden w-2/3 ml-14 mt-3"
            initial={{ opacity: 0, x: -200, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 720,
              transition: { duration: 2, type: 'spring' },
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
            scale: 1.05,
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
