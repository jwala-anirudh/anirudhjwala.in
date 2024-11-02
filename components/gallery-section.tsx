"use client";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import photo1 from "@/public/images/photo_1.png";
import photo2 from "@/public/images/photo_2.png";
import photo3 from "@/public/images/photo_3.png";
import photo4 from "@/public/images/photo_4.png";
import photo5 from "@/public/images/photo_5.png";
import photo6 from "@/public/images/photo_6.png";
import photo7 from "@/public/images/photo_7.png";
import photo8 from "@/public/images/photo_8.png";
import photo9 from "@/public/images/photo_9.png";
import photo10 from "@/public/images/photo_10.png";
import photo11 from "@/public/images/photo_11.png";
import photo12 from "@/public/images/photo_12.png";

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
          <img
            src={photo1.src}
            alt='Photo 1'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo2.src}
            alt='Photo 2'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo3.src}
            alt='Photo 3'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo4.src}
            alt='Photo 4'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo5.src}
            alt='Photo 5'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo6.src}
            alt='Photo 6'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo7.src}
            alt='Photo 7'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo8.src}
            alt='Photo 8'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo9.src}
            alt='Photo 9'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo10.src}
            alt='Photo 10'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo11.src}
            alt='Photo 11'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center rounded-lg'>
          <img
            src={photo12.src}
            alt='Photo 12'
            className='w-full h-full object-cover rounded-lg'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GallerySection;
