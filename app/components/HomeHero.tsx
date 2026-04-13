"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStartOffset = 140;
  const adjustedScrollY = Math.max(scrollY - scrollStartOffset, 0);

  const imageTranslateY = Math.min(adjustedScrollY * 0.28, 110);
  const contentTranslateY = Math.min(adjustedScrollY * 0.14, 42);
  const contentOpacity = Math.max(1 - adjustedScrollY / 420, 0.18);

  return (
    <section className="relative isolate -mt-px overflow-hidden border-b border-[#d9d2c3] bg-[#1f2937]">
      <div
        className="absolute inset-[-2rem]"
        style={{
          transform: `translateY(${imageTranslateY}px)`,
          willChange: "transform",
        }}
      >
<Image
  src="/images/MeadowbrookFeaturedHero.png"
  alt="Meadowbrook Christian Church building in Maryville, Tennessee"
  fill
  priority
  quality={100}
  className="object-cover object-center contrast-[1.05] saturate-[1.05]"
/>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.72),rgba(15,23,42,0.50),rgba(15,23,42,0.26))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.40),rgba(15,23,42,0.14),rgba(15,23,42,0.10))]" />

      <div
        className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-18 lg:py-20"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
          opacity: contentOpacity,
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#dbe7d5]">
            Welcome to Meadowbrook
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Meadowbrook Christian Church
          </h1>

          <p className="mt-4 text-lg font-medium text-[#dbe7d5] md:text-xl">
            Passion for God. A Heart for People.
          </p>

          <div className="mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.18)] backdrop-blur-[2px]">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7d5]">
                Sunday Service
              </p>
              <p className="mt-3 text-[2rem] font-semibold tracking-tight text-white">
                10:30 AM
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.18)] backdrop-blur-[2px]">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#dbe7d5]">
                Location
              </p>
              <p className="mt-3 text-[2rem] font-semibold tracking-tight text-white">
                Maryville, TN
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#4d6346]"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/16"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-2 text-sm leading-7 text-white/90 md:text-[0.95rem]">
              Visiting for the first time? You’ll feel comfortable from the
              moment you arrive.
            </p>
          </div>

          <div className="mt-5 max-w-lg rounded-2xl border border-white/20 bg-[rgba(255,255,255,0.10)] px-5 py-4 shadow-[0_10px_22px_rgba(15,23,42,0.18)] backdrop-blur-[3px]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#dbe7d5]">
              A Personal Church
            </p>
            <p className="mt-2 text-sm leading-7 text-[#f3f4f6] md:text-[0.95rem]">
We are eager to meet you. At Meadowbrook we welcome everyone who is seeking a community of faith and a deeper relationship with God. There are no special clothes to wear, no insignificant people, no questions to avoid asking, and no limits on God’s love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}