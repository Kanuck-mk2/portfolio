import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="hero">
      <video
        className="w-full h-screen object-cover object-left"
        autoPlay
        muted
        loop
        disablePictureInPicture
      >
        <source src="./bg-vid.mp4" type="video/mp4" />
      </video>

      <motion.div
        className="absolute top-1/2 right-[12rem] rounded-full 
         transform -translate-y-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: 100, y: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          y: -90,
        }}
        whileInView={{
          opacity: 1,

          rotate: 720,
        }}
        transition={{ duration: 3, type: 'spring' }}
        style={{ zIndex: 999 }}
      >
        <motion.img
          src="./profile/shawn-profile2.webp"
          alt="Profile Picture"
          className="hidden md:block rounded-full w-[250px] h-[250px] 
          border border-black glow-border cursor-pointer"
          whileHover={{
            scale: 1.2,
            rotate: 360,
          }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
          transition={{ duration: 2, type: 'spring' }}
        />
      </motion.div>

      <div className="w-full h-screen absolute top-0 left-0">
        <div
          className="max-w-[700px] m-auto h-full w-full flex flex-col 
        justify-center lg:items-start items-center"
        >
          <motion.img
            src="./profile/shawn-profile2.webp"
            alt="Profile Picture"
            className="block md:hidden rounded-full w-[250px] h-[250px] mb-7 
            border border-black glow-border cursor-pointer"
            initial={{ opacity: 0, x: 100, y: -200 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            whileInView={{
              opacity: 1,
              rotate: 720,
            }}
            transition={{ duration: 3, type: 'spring' }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 0, y: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 3, type: 'spring' }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.h1
              className="sm:text-5xl text-4xl  font-bold   text-white -mt-3 "
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
            >
              I'm{' '}
              <strong className="font-nunito font-bold sm:text-5xl text-4xl">
                <span
                  className=" bg-gradient-to-r from-blue-500 to-slate-500  
                bg-clip-text -webkit-text-stroke-2 text-transparent"
                >
                  Chad Parenteau
                </span>
              </strong>
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 4, type: 'spring' }}
          >
            <motion.h2
              className="flex sm:text-3xl text-2xl pt-4 mr-2 text-white"
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Designer',
                  2000,
                  'Code and Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
              />
            </motion.h2>
          </motion.div>
          <div className="flex justify-between pt-6 max-w-[300px] w-full">
            <motion.a
              title="/"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border rounded-full "
              initial={{ opacity: 0, x: 500, y: -500 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 720,
              }}
              transition={{ duration: 5, type: 'spring' }}
            >
              <motion.img
                title="LinkedIn"
                src="/link.png"
                alt="LinkedIn"
                className="cursor-pointer w-10 h-10  "
                whileHover={{ scale: 1.1, rotate: 1080 }}
              />
            </motion.a>

            <motion.a
              title="GitHub"
              href="https://github.com/Kanuck-mk2"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border rounded-full"
              initial={{ opacity: 0, x: -500, y: 500 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 720,
              }}
              transition={{ duration: 3, type: 'spring' }}
            >
              <motion.img
                src="/git.png"
                alt="GitHub"
                className="cursor-pointer w-10 h-10 "
                whileHover={{ scale: 1.1, rotate: 1080 }}
              />
            </motion.a>
            <motion.a
              title="Instagram"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border rounded-full "
              initial={{ opacity: 0, x: -500, y: -500 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 720,
              }}
              transition={{ duration: 4, type: 'spring' }}
            >
              <motion.img
                src="/insta.png"
                alt="Instagram"
                className="cursor-pointer w-10 h-10 "
                whileHover={{ scale: 1.1, rotate: 1080 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
