// animations.ts

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
