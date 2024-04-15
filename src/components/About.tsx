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
          initial={{ opacity: 0, x: -400 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 720,
            transition: { type: 'spring', duration: 2 },
          }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5, rotate: 360 }}
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
          Living in close proximity to the majestic Rockies has always been a
          cherished aspect of my life. Hailing from Edmonton, Alberta, nestled
          amidst the vast expanses of Western Canada, I found myself immersed in
          the breathtaking beauty of nature. However, it wasn't until I reached
          the age of 38 that I serendipitously ventured into the realm of
          coding, embarking on a transformative journey filled with boundless
          potential and exhilarating prospects in the ever-evolving landscape of
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
