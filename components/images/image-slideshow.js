'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import coffeeImg from '@/assets/cafe4.jpg';
import coffeeImg2 from '@/assets/cafe12.jpg';
import coffeeImg3 from '@/assets/cafe5.jpg';
import coffeeImg4 from '@/assets/cafe3.jpg';
import coffeeImg5 from '@/assets/cafe9.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: coffeeImg, alt: 'Cafe 1' },
  { image: coffeeImg2, alt: 'Cafe 2' },
  { image: coffeeImg3, alt: 'Cafe 3' },
  { image: coffeeImg4, alt: 'Cafe 4' },
  { image: coffeeImg5, alt: 'Cafe 5' },
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className={classes.sliderContainer}>
        {images.map((img, index) => (
            <Image
                key={index}
                src={img.image}
                alt={img.alt}
                fill
                className={`${classes.sliderImage} ${
                    index === currentIndex ? classes.active : ''
                }`}
                priority={index === 0}
            />
        ))}

        {/* 오른쪽 세로 도트 내비게이션 */}
        <div className={classes.dotContainer}>
          {images.map((_, index) => (
              <div
                  key={index}
                  className={`${classes.dot} ${
                      index === currentIndex ? classes.activeDot : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}
              />
          ))}
        </div>
      </div>
  );
}
