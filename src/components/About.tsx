import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import { aboutImage, aboutText, aboutTitle } from '../constants/animations';
import { imageAssets } from '../constants/index';
import { TextEffect } from '../constants/TextEffect';

const words = `Growing up in Edmonton, Alberta, amidst the sweeping landscapes of Western Canada, I've always been fortunate to live close by the awe-inspiring beauty of the Canadian Rockies. 
   I stumbled upon the world of coding in my recent years, embarking on a transformative journey brimming with endless possibilities and exciting opportunities in technology. 
  As a self-taught coder, Ive delved into the realm of coding with boundless enthusiasm and determination, embracing each challenge as an opportunity for growth and adaptation. 
  
  Beyond coding, I find joy in staying active, indulging in culinary adventures, and immersing myself in the world of video games.`;

const About: React.FC = () => {
  return (
    <div id="about" className="border-t-2 w-full m-auto py-16 gradient-bg -z-20">
     
      <motion.h1
        className="font-nunito font-bold text-4xl text-center text-white mt-10 mb-5"
        {...aboutTitle}
      >
        My Story
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-center ">
        <motion.div
          className="w-full md:w-2/4 rounded-lg flex justify-center mb-6 mr-5"
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
          className="text-slate-200 flex flex-col justify-start md:w-2/3 p-4"
          {...aboutText}
        >
          <TextEffect words={words} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
