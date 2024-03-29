"use client"
import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () =>{

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
      <h1 className='hero__title'>Find book, or rent a car- quick and super easy!</h1>

      <p className="hero__subtitle">streamline your car rental experience with our effortless booking process</p>

      <CustomButton
      title="Explore Cars"
      containerStyle="bg-primary-blue text-white rounded full mt-10"
      handleClick={handleScroll}
      />
      </div>
      <div className="hero__image__container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className='object-contain'></Image>
          <div className='hero__image-overlay'/>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;