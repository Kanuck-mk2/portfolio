import { Transition, Variants } from 'framer-motion';

////////////////////////////////*generic animations*///////////////

export const slideDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 2, delay: 2, type: 'tween' },
  viewport: { once: true },
};

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 2, type: 'spring' },
  viewport: { once: true },
};

/////////////////////////*glassfade animation*//////////////////

export const glassFade = {
  initial: { opacity: 1 },
  whileInView: { opacity: 0 },
  viewport: { once: false },
  transition: { duration: 4 },
};

export const navFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 2 },
};

///////////////////////*navbar animations*///////////////////////////

export const navLinkVariants = {
  hidden: { opacity: 0, scale: 0.0 },
  visible: {
    opacity: 1,
    scale: 1.0,
    transition: {
      duration: 1.5,
      delay: 3,
    },
  },
};

export const navMenuAnimation = {
  initial: { opacity: 1, x: 100, y: 0, rotate: 360, scale: 4.0 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1.0 },
  whileTap: { rotate: 720 },
};

export const navMenuItemAnimation = (index: number) => ({
  initial: { opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 2, type: 'spring' },
  },
});

export const sidenavLinkAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
  whileHover: { scale: 1.1, rotate: 360 },
  whileTap: { scale: 0.5 },
};

export const contactAnimation = {
  initial: { opacity: 0, x: 500, y: 300 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
  whileHover: { scale: 1.1 },
};

export const hoverTap = {
  whileHover: { scale: 1.1, rotate: 360 },
  whileTap: { scale: 0.5 },
};

/////////////////////////////////////*hero animations*/////////////////////////////////////////

export const imageAnimation = {
  initial: { opacity: 0, x: 100, y: -100 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, rotate: 720 },
  transition: { duration: 3, type: 'spring' },
};

export const dragAnimation = {
  drag: true,
  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
  dragTransition: { bounceStiffness: 500, bounceDamping: 10 },
};

export const textAnimation = {
  initial: { opacity: 0, x: 0, y: 50 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 4, type: 'spring' },
};
export const textAnimation2 = {
  initial: { opacity: 0, x: 0, y: -50 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 4, type: 'spring' },
};
export const transition = {
  transition: { duration: 4, type: 'spring' },
};
export const linkAnimation = {
  initial: { opacity: 0, x: 50, y: -200 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 5, type: 'spring' },
};

export const gitAnimation = {
  initial: { opacity: 0, x: -100, y: 200 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: -720 },
  transition: { duration: 3, type: 'spring' },
};

export const instaAnimation = {
  initial: { opacity: 0, x: -100, y: -100 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
};

/////////////////////////////////////////////////*About*/////////////////////////////////////////

export const aboutTitle = {
  initial: { opacity: 0, y: -100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
  whileTap: { rotate: 360 },
};

export const aboutImage = {
  initial: { opacity: 0, scale: 0.0 },
  whileInView: {
    opacity: 1,
    scale: 1.0,
    rotate: 720,
    transition: { type: 'spring', duration: 2 },
  },
  viewport: { once: true },
};

export const aboutText = {
  initial: { opacity: 0, x: 500 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
};

/////////////////////////////////////////////////*Skills animations*/////////////////////////////////////

export const skillTitle = {
  initial: { opacity: 0, x: 0, y: 300 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', duration: 2 },
  },
  viewport: { once: true },
  whileTap: { rotate: 360 },
};

export const skillYear = {
  initial: { opacity: 1, scale: 9.0 },
  whileInView: {
    opacity: 1,
    rotate: 720,
    scale: 1.0,
    transition: { duration: 5, type: 'spring' },
  },
  viewport: { once: true },
  whileHover: { rotate: 360, scale: 2.5 },
};

export const skillTitles = {
  initial: { opacity: 0, x: 0, y: 0, scale: 0.1 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1.0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
};

export const skillDuration = {
  initial: { opacity: 0, x: 0, y: -200 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
};

export const skillDetail = {
  initial: { opacity: 0, x: 500, y: 0 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', duration: 2 },
  },
  viewport: { once: true },
  whileHover: {
    scale: 1.05,
  },
};

//////////////////////////////////////////////////*project animations*////////////////////////////////

////////// project item card ////////////

export const projectTransition: Transition = {
  duration: 3,
  type: 'spring',
};

export const projectVariants: Variants = {
  initial: { opacity: 0, x: 0, y: 50 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 720 },
};

export const projectHoverTap = {
  whileHover: { y: -20, rotate: -10 },
  whileTap: { scale: 0.5 },
};

////////////Project section/////////////

export const projectTitle = {
  initial: { opacity: 0, x: -500, y: 0 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
  whileTap: { rotate: 360 },
};

export const projectText = {
  initial: { opacity: 0, x: 500, y: 0 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
  whileHover: { scale: 1.05 },
};

export const projectLayout = {
  initial: { opacity: 0, x: 0, y: 200 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
};

/////////////////////////*contact animations*///////////////////////

export const contact1 = {
  initial: { opacity: 0, x: 500, y: 0 },
  whileInView: {
    opacity: 1,
    x: -69,
    y: 0,
    transition: { type: 'spring' },
  },
  viewport: { once: true },
};

export const contact2 = {
  initial: { opacity: 0, x: -500, y: -60 },
  whileInView: {
    opacity: 1,
    x: -2,
    y: -60,
    transition: { type: 'spring' },
  },
  viewport: { once: true },
};

export const form = (index: number) => ({
  initial: { opacity: 0, x: index % 2 === 0 ? -500 : 500 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: 'spring' },
  },
  viewport: { once: true },
  whileTap: { scale: 0.5 },
});

export const submit = {
  initial: { opacity: 0, x: 300, y: 0 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring' },
  },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: {
    scale: 0.1,
    borderRadius: '100%',
    transition: { duration: 0.2 },
  },
};

export const resume = {
  initial: { opacity: 0, x: -300, y: 0 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring' },
  },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: {
    scale: 0.1,
    borderRadius: '100%',
    transition: { duration: 0.2 },
  },
};

//////////////////////////////////////////////*footer*/////////////////////////////////////////////////////

export const footer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 5 },
};
