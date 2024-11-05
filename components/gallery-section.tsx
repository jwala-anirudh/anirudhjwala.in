"use client";

import "swiper/css";
import "swiper/css/effect-cards";

import Image from "next/image";

import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import photo1 from "@/public/images/photo_1.webp";
import photo2 from "@/public/images/photo_2.webp";
import photo3 from "@/public/images/photo_3.webp";
import photo4 from "@/public/images/photo_4.webp";
import photo5 from "@/public/images/photo_5.webp";
import photo6 from "@/public/images/photo_6.webp";
import photo7 from "@/public/images/photo_7.webp";
import photo8 from "@/public/images/photo_8.webp";
import photo9 from "@/public/images/photo_9.webp";
import photo10 from "@/public/images/photo_10.webp";
import photo11 from "@/public/images/photo_11.webp";
import photo12 from "@/public/images/photo_12.webp";

const GallerySection = () => {
  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Gallery</h2>
      <Swiper
        effect='cards'
        grabCursor={true}
        modules={[EffectCards]}
        className='w-60 h-80 my-8'
      >
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo1}
            alt='Photo 1'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo2}
            alt='Photo 2'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo3}
            alt='Photo 3'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo4}
            alt='Photo 4'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo5}
            alt='Photo 5'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo6}
            alt='Photo 6'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo7}
            alt='Photo 7'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo8}
            alt='Photo 8'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo9}
            alt='Photo 9'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo10}
            alt='Photo 10'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo11}
            alt='Photo 11'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <Image
            src={photo12}
            alt='Photo 12'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GallerySection;
