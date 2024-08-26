'use client';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from './cn.ts';

export const FlipWords = ({
  words,
  gradients,
  duration = 3500,
  className,
}: {
  words: string[];
  gradients: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      if (elapsed >= duration) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        startTimeRef.current = timestamp; // reset start time
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [words, duration]);

  const currentWord = words[currentWordIndex];
  const currentGradient = gradients[currentWordIndex % gradients.length];

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
          background: currentGradient,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
        animate={{
          opacity: 1,
          y: 0,
          background: currentGradient,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
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
          background: currentGradient,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
        className={cn(
          'z-10 inline-block relative font-nunito font-semibold text-left text-sky-300 px-2',
          className,
        )}
        key={currentWord}
        style={{
          background: currentGradient,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {currentWord.split(' ').map((word, wordIndex) => (
          <span key={currentWord + wordIndex} className="inline-block">
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={currentWord + wordIndex + letter + letterIndex}
                initial={{
                  opacity: 0,
                  scale: 2.0,
                  rotate: -320,
                  y: -40,
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                transition={{
                  delay: letterIndex * 0.12,
                  duration: 0.6,
                  type: 'spring',
                  damping: 10,
                  stiffness: 40,
                }}
                className="inline-block"
                style={{
                  background: currentGradient,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
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
