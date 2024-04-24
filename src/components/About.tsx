import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

const About: React.FC = () => {
  const imageAssets: string[] = [
    './profile/shawnm1.jpg',
    './profile/shawn1.webp',
    './profile/shawn-side.jpg',
    './profile/shawn2.webp',
    './profile/shawn4.webp',
    './profile/shawn5.webp',
  ];

  return (
    <div id="about" className="border-2 w-full m-auto py-16 gradient-bg">
      <motion.h1
        className="font-nunito font-bold text-4xl text-center text-white mt-10 mb-5"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 3, type: 'spring' },
        }}
        viewport={{ once: true }}
        whileTap={{ rotate: 360 }}
      >
        My Story
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="w-full md:w-2/4 rounded-lg p-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.0 }}
          whileInView={{
            opacity: 1,
             scale: 1.0,
            rotate: 720,
            transition: { type: 'spring', duration: 2 },
          }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5, rotate: 360, opacity: 0 }}
          >
            <ImageSlider imageAssets={imageAssets} />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-slate-200 flex flex-col justify-start overflow-x-hidden md:w-2/3 p-4 mt-4"
          initial={{ opacity: 0, x: 500 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 3, type: 'spring' },
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          Growing up in Edmonton, Alberta, amidst the sweeping landscapes of
          Western Canada, I've always been fortunate to live close by the
          awe-inspiring beauty of the Canadian Rockies. I've particularly
          enjoyed summer trips to pristine locations like Jasper and Banff.
          <br className="mt-3" />
          It wasn't until I turned 38 that I stumbled upon the world of coding,
          embarking on a transformative journey brimming with endless
          possibilities and exciting opportunities in technology. As a
          self-taught coder, I've delved into the realm of coding with boundless
          enthusiasm and determination, embracing each challenge as an
          opportunity for growth and adaptation.
          <br className="mt-3" />
          Beyond coding, I find joy in staying active, indulging in culinary
          adventures, and immersing myself in the world of video games.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
