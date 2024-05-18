'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../constants/cn.ts';
let interval: number;

export const FlipWords = ({
  words,
  duration = 4000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    startAnimation();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const startAnimation = () => {
    let i = 0;
    interval = setInterval(() => {
      i++;
      if (i === words.length) {
        i = 0;
      }
      const word = words[i];
      setCurrentWord(word);
    }, duration);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          'z-10 inline-block  relative text-left text-sky-300 px-2',
          className,
        )}
        key={currentWord}
      >
        {currentWord.split(' ').map((word, wordIndex) => (
          <span key={currentWord + wordIndex} className="inline-block">
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={currentWord + wordIndex + letter + letterIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: letterIndex * 0.12,
                  duration: 0.4,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex < currentWord.split(' ').length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
