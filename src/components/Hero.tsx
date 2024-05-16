import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {
  dragAnimation,
  gitAnimation,
  glassFade,
  imageAnimation,
  instaAnimation,
  linkAnimation,
  textAnimation,
  textAnimation2,
} from '../constants/animations';
import { useState } from 'react';

const Hero = () => {
  const [textColor, setTextColor] = useState('lime');

  return (
    <div id="home" className="w-full h-screen relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent z-10"
        style={{ backdropFilter: 'blur(20px)' }}
        {...glassFade}
      ></motion.div>
      <img
        className="w-full h-screen object-cover object-left"
        alt="background"
        src="/bg1.jpeg"
      />

      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <div className="max-w-[750px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <div className="flex flex-col justify-center items-center lg:flex-row-reverse z-[600]">
            <motion.div {...imageAnimation} whileHover={{ scale: 1.2 }}>
              <motion.img
                src="./profile/shawn-profile2.webp"
                alt="Profile Picture"
                className="rounded-full w-[250px] h-[250px] border border-black justify-end glow-border cursor-pointer "
                {...dragAnimation}
                whileHover={{ rotate: 720 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>

            <div className="flex flex-col justify-center items-center">
              <motion.div
                className="flex flex-row justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <motion.h1
                  className="font-nunito font-bold  sm:text-5xl text-4xl text-slate-200 mr-2 z-30"
                  {...textAnimation}
                >
                  Chad
                </motion.h1>

                <motion.h1
                  className="font-nunito font-bold sm:text-5xl text-4xl text-slate-200 z-30"
                  {...textAnimation2}
                >
                  Parenteau
                </motion.h1>
              </motion.div>

              <motion.div
                style={{
                  fontSize: '35px',
                  color: textColor,
                }}
                {...textAnimation}
              >
                <motion.h2
                  className="flex sm:text-3xl text-2xl pt-4 mr-2 "
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <TypeAnimation
                    sequence={[
                      'Web Developer',
                      2000,
                      () => setTextColor('aqua'),
                      'Designer',
                      2000,
                      () => setTextColor('lime'),
                      'Code and Tech Enthusiast',
                      2000,
                      () => setTextColor('pink'),
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                  />
                </motion.h2>
              </motion.div>

              <div className="flex justify-between lg:items-center pt-6 max-w-[300px] w-full z-[999]">
                <motion.a
                  title="/"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border rounded-full "
                  {...linkAnimation}
                >
                  <motion.img
                    title="LinkedIn"
                    src="/link.png"
                    alt="LinkedIn"
                    className="cursor-pointer w-10 h-10"
                    whileHover={{ scale: 1.1, rotate: 1080 }}
                  />
                </motion.a>

                <motion.a
                  title="GitHub"
                  href="https://github.com/Kanuck-mk2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border rounded-full"
                  {...gitAnimation}
                >
                  <motion.img
                    src="/git.png"
                    alt="GitHub"
                    className="cursor-pointer w-10 h-10"
                    whileHover={{ scale: 1.1, rotate: -1080 }}
                  />
                </motion.a>

                <motion.a
                  title="Instagram"
                  href="https://www.instagram.com/chad.parenteau2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border rounded-full "
                  {...instaAnimation}
                >
                  <motion.img
                    src="/insta.png"
                    alt="Instagram"
                    className="cursor-pointer w-10 h-10"
                    whileHover={{ scale: 1.1, rotate: 1080 }}
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
