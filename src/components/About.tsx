import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import { aboutImage, aboutText, aboutTitle } from '../constants/animations';
import { imageAssets } from '../constants/index';
import { TextEffect } from './TextEffect';

const words = `Growing up in Edmonton, Alberta, amidst the sweeping landscapes of Western Canada, Ive always been fortunate to live close by the awe-inspiring beauty of the Canadian Rockies. Ive particularly enjoyed summer trips to pristine locations like Jasper and Banff. 
  It wasnt until I turned 38 that I stumbled upon the world of coding, embarking on a transformative journey brimming with endless possibilities and exciting opportunities in technology. 
  As a self-taught coder, Ive delved into the realm of coding with boundless enthusiasm and determination, embracing each challenge as an opportunity for growth and adaptation. 
  
  Beyond coding, I find joy in staying active, indulging in culinary adventures, and immersing myself in the world of video games.`;

const About: React.FC = () => {
  return (
    <div id="about" className=" border-t-2 w-full m-auto py-16 gradient-bg">
      <motion.h1
        className="font-nunito font-bold text-4xl text-center text-white mt-10 mb-5"
        {...aboutTitle}
      >
        My Story
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="w-full md:w-2/4 rounded-lg p-2 flex justify-center"
          {...aboutImage}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5, rotate: 360, opacity: 0 }}
          >
            <ImageSlider imageAssets={imageAssets} />
          </motion.div>
        </motion.div>

        <motion.div
          className="text-slate-200 flex flex-col justify-start overflow-x-hidden md:w-2/3 p-4 mt-4"
          {...aboutText}
        >
          <TextEffect words={words} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
