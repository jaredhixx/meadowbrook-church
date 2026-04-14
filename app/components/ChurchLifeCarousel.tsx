"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/community/families.jpg",
    alt: "Families and children spending time together at Meadowbrook Christian Church",
    eyebrow: "Real Community",
    title: "Warm, personal church life",
    description:
      "Real relationships, genuine fellowship, and a church community where people can feel known.",
  },
  {
    src: "/images/kids/kids-5.jpg",
    alt: "Children enjoying time together at Meadowbrook Christian Church",
    eyebrow: "Kids Welcome",
    title: "A place where families can feel at home",
    description:
      "Children are welcome at Meadowbrook, and families matter deeply in the life of the church.",
  },
  {
    src: "/images/kids/kids2.jpg",
    alt: "Kids activity time at Meadowbrook Christian Church",
    eyebrow: "Learning Together",
    title: "Moments of growth and encouragement",
    description:
      "From regular gatherings to special activities, Meadowbrook is building a caring church family.",
  },
  {
    src: "/images/kids/kids3.jpg",
    alt: "Children enjoying fellowship and activities at Meadowbrook Christian Church",
    eyebrow: "Church Life",
    title: "Faith, fellowship, and community",
    description:
      "These moments reflect the kind of church life Meadowbrook wants to keep nurturing and growing.",
  },
  {
    src: "/images/kids/kids1.jpg",
    alt: "Children participating in an activity at Meadowbrook Christian Church",
    eyebrow: "Families Matter",
    title: "A church where people are truly welcome",
    description:
      "Meadowbrook wants every visitor to feel comfortable, welcomed, and included from the start.",
  },
];

export default function ChurchLifeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const prev = () => {
    setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const goTo = (targetIndex: number) => {
    setIndex(targetIndex);
  };

  const currentSlide = slides[index];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[30px] border border-[#d9d2c3] bg-[#f8f4ec] shadow-[0_24px_60px_rgba(31,41,55,0.12)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,41,55,0.58)] via-[rgba(31,41,55,0.10)] to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <div className="max-w-md rounded-[20px] border border-white/15 bg-[rgba(15,23,42,0.26)] p-3 shadow-[0_10px_30px_rgba(15,23,42,0.16)] backdrop-blur-[3px] md:p-4">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#dbe7d5]">
                {currentSlide.eyebrow}
              </p>

              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-white md:text-[1.55rem]">
                {currentSlide.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/90 md:text-[0.9rem]">
                {currentSlide.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous church life photo"
            className="absolute left-1.5 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/82 text-base text-[#1f2937] shadow-[0_8px_24px_rgba(15,23,42,0.16)] transition hover:bg-white md:left-3"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next church life photo"
            className="absolute right-1.5 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/82 text-base text-[#1f2937] shadow-[0_8px_24px_rgba(15,23,42,0.16)] transition hover:bg-white md:right-3"
          >
            →
          </button>
        </div>

        <div className="border-t border-[#e7e0d3] bg-white/70 px-4 py-4 md:px-5">
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  slideIndex === index
                    ? "bg-[#5c7354] text-white shadow-sm"
                    : "bg-[#ece6d9] text-[#4b5563] hover:bg-[#e3dbc9]"
                }`}
              >
                {slide.eyebrow}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}