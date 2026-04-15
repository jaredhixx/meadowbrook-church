"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

type PhotoCarouselProps = {
  slides: Slide[];
  aspectClassName?: string;
};

export default function PhotoCarousel({
  slides,
  aspectClassName = "aspect-[4/3]",
}: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();

    if (slides.length <= 1) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
  }, [slides.length, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  const prev = useCallback(() => {
    setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  }, [slides.length]);

  const goTo = useCallback((newIndex: number) => {
    setIndex(newIndex);
  }, []);

  const handlePrev = () => {
    prev();
    startAutoPlay();
  };

  const handleNext = () => {
    next();
    startAutoPlay();
  };

  const handleGoTo = (newIndex: number) => {
    goTo(newIndex);
    startAutoPlay();
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartXRef.current - touchEndX;

    if (Math.abs(difference) > 40) {
      if (difference > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
  };

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[index];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[30px] border border-[#d9d2c3] bg-[#f8f4ec] shadow-[0_24px_60px_rgba(31,41,55,0.12)]">
        <div
          className={`relative w-full overflow-hidden select-none [touch-action:pan-y] ${aspectClassName}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            key={currentSlide.src}
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,41,55,0.50)] via-[rgba(31,41,55,0.08)] to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-2 md:p-3">
            <div className="max-w-sm rounded-[16px] border border-white/10 bg-[rgba(15,23,42,0.18)] p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.12)] backdrop-blur-[2px] md:p-3">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#dbe7d5]">
                {currentSlide.eyebrow}
              </p>

              <h3 className="mt-1 text-base font-semibold tracking-tight text-white md:text-lg">
                {currentSlide.title}
              </h3>

              <p className="mt-1.5 text-[0.7rem] leading-5 text-white/90 md:text-sm">
                {currentSlide.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/90 text-base text-[#1f2937] shadow-[0_8px_24px_rgba(15,23,42,0.16)] transition active:scale-95 md:left-3"
          >
            ←
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/90 text-base text-[#1f2937] shadow-[0_8px_24px_rgba(15,23,42,0.16)] transition active:scale-95 md:right-3"
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
                onClick={() => handleGoTo(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition active:scale-95 ${
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