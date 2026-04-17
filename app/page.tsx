import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHero from "./components/HomeHero";
import PhotoCarousel from "./components/PhotoCarousel";

export const metadata: Metadata = {
  title: "Christian Church in Maryville TN Near Alcoa",
  description:
    "Meadowbrook Christian Church is a small, welcoming church in Maryville TN near Alcoa. Join us Sundays at 10:45 AM for Worship & the Word and discover a personal church community rooted in faith, fellowship, and God’s Word.",
  alternates: {
    canonical: "/",
  },
};

const newHereSlides = [
  {
    src: "/images/community/community-1.jpg",
    alt: "Church fellowship at Meadowbrook Christian Church",
    eyebrow: "Fellowship",
    title: "A good place to begin meeting people",
    description:
      "Shared time together helps people begin building real relationships at Meadowbrook.",
  },
  {
    src: "/images/community/community-2.jpg",
    alt: "Community life at Meadowbrook Christian Church",
    eyebrow: "Community",
    title: "A smaller church where people can feel known",
    description:
      "Connection at Meadowbrook often happens in simple, personal ways through conversations and gatherings.",
  },
  {
    src: "/images/community/community-3.jpg",
    alt: "Church gathering at Meadowbrook Christian Church",
    eyebrow: "Church Life",
    title: "A welcoming church where you can find your place",
    description:
      "Whether you are visiting, asking questions, or looking for a church home, there is a place for you here.",
  },
];

const churchLifeSlides = [
  {
    src: "/images/community/families.jpg",
    alt: "Families and children spending time together at Meadowbrook Christian Church",
    eyebrow: "Real Community",
    title: "Warm, personal church life",
    description:
      "Real relationships, shared meals, and personal church life help Meadowbrook feel welcoming and genuine.",
  },
  {
    src: "/images/kids/kids-5.jpg",
    alt: "Children enjoying time together at Meadowbrook Christian Church",
    eyebrow: "Kids Welcome",
    title: "A place where families can feel at home",
    description:
      "Children are welcome at Meadowbrook, and families are part of the life of the church.",
  },
  {
    src: "/images/kids/kids2.jpg",
    alt: "Kids activity time at Meadowbrook Christian Church",
    eyebrow: "Learning Together",
    title: "Moments of growth and encouragement",
    description:
      "From regular church life to special activities, Meadowbrook is growing as a place where people can grow together in faith.",
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

export default function Home() {
  const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Meadowbrook Christian Church",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2332 Grove St",
      addressLocality: "Maryville",
      addressRegion: "TN",
      postalCode: "37804",
      addressCountry: "US",
    },
    url: "https://www.meadowbrookcc.org",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:45",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "19:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f2ede3] text-[#1f2937]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />

      <HomeHero />

      <section className="relative -mt-12 border-b border-[#d9d2c3] bg-[#f2ede3] pt-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#e7e0d3] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                What to Expect
              </p>

              <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
                Passion for God, a Heart for People.
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                A welcoming church where you can come as you are
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b5563]">
                We are eager to meet you. At Meadowbrook we welcome everyone who
                is seeking a community of faith and a deeper relationship with
                God.
              </p>

              <div className="mt-5 rounded-2xl border border-[#e2dccf] bg-white/80 p-5 shadow-sm">
                <p className="text-base leading-8 text-[#374151]">
                  Here there are no special clothes to wear, no insignificant
                  people, no questions to avoid asking, and no limits on God’s
                  love.
                </p>

                <div className="mt-3 grid gap-4 border-t border-[#e7e0d3] pt-4 sm:grid-cols-2 xl:grid-cols-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Sunday Main Service
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Worship &amp; the Word at 10:45 AM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Optional Sunday
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      10:00–10:30 AM adult prayer meeting and children&apos;s classes
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Thursday
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Discussion group from 7:00–8:00 PM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      First Sunday
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Monthly fellowship meal
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#4b5563]">
                  From 10:30–10:45 AM there is relaxed time to arrive, meet
                  people, and get settled before the main service begins, so
                  first-time visitors are welcome to come right at 10:45 AM if
                  that is easiest.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-4 lg:flex lg:justify-center">
              <div className="w-full max-w-[380px] overflow-hidden rounded-[28px] border border-[#d9d2c3] bg-white shadow-[0_24px_60px_rgba(31,41,55,0.10)]">
                <div className="border-b border-[#e7e0d3] bg-[#f7f3eb] px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#5c7354]">
                    Welcome Video
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                    Hear a welcome directly from Meadowbrook Christian Church.
                  </p>
                </div>

                <div className="bg-[#111827] p-3">
                  <div className="relative mx-auto aspect-[9/16] w-full max-w-[267px] overflow-hidden rounded-[22px] bg-black">
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1910773666208170%2F&show_text=false&width=267&t=0"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      title="Welcome video from Meadowbrook Christian Church"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  New Here?
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1f2937] md:text-3xl">
                  Start with a visit, then find your place
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#4b5563]">
                  If you are visiting Meadowbrook for the first time, the best
                  place to start is our Visit page. If you would like to learn
                  how families, starters, believers, and fellowship life connect
                  at Meadowbrook, our Connect page will help you take the next
                  step.
                </p>

                <div className="mt-6 space-y-4 text-base text-[#4b5563]">
                  <p>• Visitors are welcome to come at 10:45 AM for the main service</p>
                  <p>• 10:30–10:45 AM is a relaxed time to arrive and get settled</p>
                  <p>• Thursday evenings offer a helpful setting for questions and discussion</p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/visit"
                    className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                  >
                    Plan Your Visit
                  </Link>

                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                  >
                    Explore Connect
                  </Link>
                </div>
              </div>

              <div>
                <PhotoCarousel
                  slides={newHereSlides}
                  aspectClassName="aspect-[5/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Church Life
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                A welcoming church where people are known
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                Meadowbrook is a personal church community where families,
                children, and adults can grow in faith together.
              </p>

              <div className="mt-6 space-y-4 text-base text-[#4b5563]">
                <p>• Children are welcome</p>
                <p>• Shared meals and monthly potlucks help people know one another</p>
                <p>• Thursday discussion group creates space for honest questions and conversation</p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Plan Your Visit
                </Link>

                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Explore Connect
                </Link>
              </div>
            </div>

            <div>
              <PhotoCarousel slides={churchLifeSlides} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Location
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                Easy to find in Maryville
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                Meadowbrook Christian Church is located at 2332 Grove St in
                Maryville, Tennessee, and is convenient for visitors from
                Maryville, Alcoa, and the surrounding Blount County area.
              </p>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Parking is straightforward, and our smaller size helps your
                  first visit feel comfortable from the moment you arrive.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Plan Your Visit
                </Link>

                <a
                  href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] shadow-sm">
                <iframe
                  title="Map to Meadowbrook Christian Church"
                  src="https://www.google.com/maps?q=2332%20Grove%20St%20Maryville%20TN%2037804&output=embed"
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#f2ede3]">
        <div className="mx-auto max-w-6xl px-6 py-18 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Meet the people serving Meadowbrook
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              Meadowbrook Christian Church is served by Pastor Matt Hixson and
              Hope Hixson. If you would like to learn more about the church and
              its leadership, we invite you to visit the Leadership page.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] bg-white shadow-sm">
              <div className="relative aspect-[4/4] w-full">
                <Image
                  src="/images/leadership/matt.jpg"
                  alt="Pastor Matt Hixson at Meadowbrook Christian Church"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center object-top"
                />
              </div>

              <div className="border-t border-[#e7e0d3] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  Pastor
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#1f2937]">
                  Matt Hixson
                </h3>

                <p className="mt-4 text-base leading-8 text-[#4b5563]">
                  Matt Hixson is a 1991 and 1999 graduate of Johnson
                  University, where he earned bachelor’s and master’s degrees
                  in Bible, New Testament, and Missions. He also holds a
                  master’s in education from the University of Tennessee.
                </p>

                <p className="mt-4 text-base leading-8 text-[#4b5563]">
                  He served as a missionary in China from 1992-2001 and
                  2017-2019 and was a professor at Johnson University from
                  2003-2017.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] bg-white shadow-sm">
              <div className="relative aspect-[4/4] w-full">
                <Image
                  src="/images/leadership/hope.jpg"
                  alt="Hope Hixson at Meadowbrook Christian Church"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center object-top"
                />
              </div>

              <div className="border-t border-[#e7e0d3] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  Worship Leader
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#1f2937]">
                  Hope Hixson
                </h3>

                <p className="mt-4 text-base leading-8 text-[#4b5563]">
                  Hope has a bachelor’s degree in Bible and elementary education
                  from Johnson University and a master’s in education from the
                  University of Tennessee.
                </p>

                <p className="mt-4 text-base leading-8 text-[#4b5563]">
                  She has been married to Matt for over thirty-five years and
                  during that time they have been partners in various ministries.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/leadership"
              className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
            >
              Meet Our Leadership
            </Link>

            <Link
              href="/visit"
              className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}