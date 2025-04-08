'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import coffeeImg from '@/assets/cafe4.jpg';
import coffeeImg2 from '@/assets/cafe12.jpg';
import coffeeImg3 from '@/assets/cafe5.jpg';
import coffeeImg4 from '@/assets/cafe13.jpg';
import coffeeImg5 from '@/assets/cafe9.jpg';
import coffeeImg6 from '@/assets/cafe3.jpg';
import coffeeImg7 from '@/assets/cafe7.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: coffeeImg, alt: 'A delicious, juicy burger' },
  { image: coffeeImg2, alt: 'A delicious, spicy curry' },
  { image: coffeeImg3, alt: 'Steamed dumplings' },
  { image: coffeeImg4, alt: 'Mac and cheese' },
  { image: coffeeImg5, alt: 'A delicious pizza' },
  { image: coffeeImg6, alt: 'A delicious schnitzel' },
  { image: coffeeImg7, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
