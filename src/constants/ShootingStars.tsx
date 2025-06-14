'use client';

// Multiple Shooting Stars Component with Fade-out

import { cn } from './cn';
import React, { useEffect, useState, useRef } from 'react';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
  opacity: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  maxStars?: number;
}

const getRandomStartPoint = () => {
  const offset = Math.random() * window.innerWidth;
  const angle = 120;
  return { x: offset, y: 0, angle };
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 40,
  minDelay = 1500,
  maxDelay = 2500,
  starColor = '#38E1F0',
  trailColor = '#CD6CF4',
  starWidth = 10,
  starHeight = 10,
  className,
  maxStars = 5,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let isMounted = true;

    const createStar = () => {
      if (!isMounted) return;

      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 2,
        opacity: 1,
      };

      setStars((prev) => {
        const updated = [...prev, newStar];
        return updated.length > maxStars ? updated.slice(1) : updated;
      });

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
    return () => { isMounted = false; };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;
            const newOpacity = Math.max(0, 1 - newDistance / 600);

            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20 ||
              newOpacity <= 0
            ) {
              return null;
            }

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
              opacity: newOpacity,
            };
          })
          .filter((s): s is ShootingStar => s !== null)
      );
      requestAnimationFrame(moveStars);
    };

    const frame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn('w-full h-full absolute inset-0', className)}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          fillOpacity={star.opacity}
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
    </svg>
  );
};
