// animations.ts

///////////////////////*navbar animations*///////////////////////////

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

export const homeAnimation = {
  initial: { opacity: 0, x: -500, y: 300 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
};

export const aboutAnimation = {
  initial: { opacity: 0, x: 500, y: 300 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
  whileHover: { scale: 1.1 },
};

export const skillsAnimation = {
  initial: { opacity: 0, x: 500, y: -300 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
  whileHover: { scale: 1.1 },
};

export const projectsAnimations = {
  initial: { opacity: 0, x: -500, y: -300 },
  animate: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
  whileHover: { scale: 1.1 },
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

//////////////////*hero animations*///////////////////////

export const imageAnimation = {
  initial: { opacity: 0, x: 100, y: -200 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, rotate: 720 },
  transition: { duration: 3, type: 'spring' },
};
export const hoverAnimation = {
  scale: 1.2,
  rotate: 360,
};

export const dragAnimation = {
  drag: true,
  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
  dragTransition: { bounceStiffness: 500, bounceDamping: 10 },
};

export const textAnimation = {
  initial: { opacity: 0, x: 0, y: 500 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 4, type: 'spring' },
};
export const textAnimation2 = {
  initial: { opacity: 0, x: 0, y: -500 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 4, type: 'spring' },
};
export const transition = {
  transition: { duration: 4, type: 'spring' },
};
export const linkAnimation = {
  initial: { opacity: 0, x: 500, y: -500 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 5, type: 'spring' },
};

export const gitAnimation = {
  initial: { opacity: 0, x: -500, y: 500 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: -720 },
  transition: { duration: 3, type: 'spring' },
};

export const instaAnimation = {
  initial: { opacity: 0, x: -500, y: -500 },
  animate: { opacity: 1, x: 0, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 720 },
  transition: { duration: 4, type: 'spring' },
};

//////////////////////*About*////////////////////

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
