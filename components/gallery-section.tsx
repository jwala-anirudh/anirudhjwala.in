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
  const photos = [
    {
      id: 1,
      src: photo1,
      alt: "Photo 1",
    },
    {
      id: 2,
      src: photo2,
      alt: "Photo 2",
    },
    {
      id: 3,
      src: photo3,
      alt: "Photo 3",
    },
    {
      id: 4,
      src: photo4,
      alt: "Photo 4",
    },
    {
      id: 5,
      src: photo5,
      alt: "Photo 5",
    },
    {
      id: 6,
      src: photo6,
      alt: "Photo 6",
    },
    {
      id: 7,
      src: photo7,
      alt: "Photo 7",
    },
    {
      id: 8,
      src: photo8,
      alt: "Photo 8",
    },
    {
      id: 9,
      src: photo9,
      alt: "Photo 9",
    },
    {
      id: 10,
      src: photo10,
      alt: "Photo 10",
    },
    {
      id: 11,
      src: photo11,
      alt: "Photo 11",
    },
    {
      id: 12,
      src: photo12,
      alt: "Photo 12",
    },
  ];

  return (
    <section className="overflow-hidden">
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
        Gallery
      </h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-60 h-80 my-8 overflow-hidden"
      >
        {photos.map((photo) => (
          <SwiperSlide
            key={photo.id}
            className="flex items-center justify-center rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySection;
