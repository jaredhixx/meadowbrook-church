import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHero from "./components/HomeHero";

export const metadata: Metadata = {
  title: "Meadowbrook Christian Church | Church in Maryville TN",
  description:
    "Looking for a church in Maryville TN? Meadowbrook Christian Church is a welcoming, Bible-based church with Sunday services, a friendly community, and a personal atmosphere near Maryville and Alcoa.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2ede3] text-[#1f2937]">
      <HomeHero />

      <section className="relative border-b border-[#d9d2c3] bg-[#f2ede3] -mt-12 pt-6">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#e7e0d3] to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                What to Expect
              </p>

<h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
  A community of love and reconciliation
</h2>

<p className="mt-5 max-w-xl text-lg leading-8 text-[#4b5563]">
  Meadowbrook Christian Church is a small church in Maryville, TN
  where people can be known, welcomed, and encouraged to grow in
  faith. We want to honor God, strengthen one another, and help
  people take meaningful steps toward Jesus Christ.
</p>

              <div className="mt-5 rounded-2xl border border-[#e2dccf] bg-white/80 p-5 shadow-sm">
<p className="text-base leading-8 text-[#374151]">
  We are eager to meet you. At Meadowbrook we welcome everyone who
  is seeking a community of faith and a deeper relationship with
  God.
</p>

                <div className="mt-3 grid gap-4 border-t border-[#e7e0d3] pt-4 sm:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Sunday
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Worship at 10:30 AM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Thursday
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Small group at 7:00 PM
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
              </div>
            </div>

<div className="mt-14">
              <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] bg-white shadow-[0_24px_60px_rgba(31,41,55,0.10)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/pastortalking1.jpg"
                    alt="Pastor Matt Hixson speaking with someone at Meadowbrook Christian Church"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="border-t border-[#e7e0d3] bg-white/70 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#5c7354]">
                    Welcome
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                    We are eager to meet you and welcome everyone who is seeking
                    a community of faith and a deeper relationship with God.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Families with Children
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Our church is blessed with some wonderful, joyful children. Our
                youth workers are kind and love to mentor these beautiful young
                souls.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                For Starters
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                If you have just begun your journey toward faith, we would love
                to get to know you better. Thursday evenings may be the best
                opportunity to ask questions and find teaching and discussion
                related to your needs or interests.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                For Believers
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                For those who are already believers in Christ, we would like to
                get to know you better and help you proceed toward membership
                and involvement in the life and ministries of our congregation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Fellowship & Events
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Meadowbrook values fellowship and connection through potluck
                meals, game nights, and Vacation Bible School as the church
                continues to grow together.
              </p>
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
                Maryville, Tennessee, and is a convenient option for visitors
                from Maryville, Alcoa, and the surrounding Blount County area.
              </p>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Whether you live nearby or are just exploring churches in the
                  area, you will find our location simple and easy to access.
                </p>

                <p>
                  Parking is straightforward, and our small size makes your
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
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-[#d9d2c3] bg-white shadow-sm">
                <div className="border-b border-[#d9d2c3] bg-[#f7f3eb] px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                    Welcome Video
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#1f2937]">
                    Meet the Pastor
                  </h3>
                </div>

                <div className="h-[520px] w-full">
                  <iframe
                    title="Pastor Welcome Video"
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMeadowbrookChristianChurch%2Fvideos%2F1910773666208170%2F&show_text=false&width=380"
                    className="h-full w-full"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

<div>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
    Meet the Pastor
  </p>
  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
    Meet Pastor Matt Hixson
  </h2>

  <div className="mt-6 rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
<p className="text-base leading-8 text-[#374151]">
  Matt Hixson is a 1991 and 1999 graduate of Johnson University, where he
  earned bachelor’s and master’s degrees in Bible, New Testament, and
  Missions. He also holds a master’s in education from the University of
  Tennessee.
</p>

<p className="mt-4 text-base leading-8 text-[#374151]">
  He served as a missionary in China from 1992-2001 and 2017-2019, starting
  various Bible studies and helping establish two new churches. He was a
  professor at Johnson University from 2003-2017.
</p>

<p className="mt-4 text-base leading-8 text-[#374151]">
  From 2019-2025 he wrote curriculum for a Bible translation organization,
  did supply preaching in the area, led Bible studies for international
  students and scholars, and worked for Knox County Schools.
</p>
  </div>

  <div className="mt-5 space-y-4 text-base leading-7 text-[#4b5563]">
    <p>
      Matt enjoys developing relationships with people of all ages and from all
      different backgrounds.
    </p>

    <p>
      As a bi-vocational minister, he continues to work for Knox County Schools
      as well as Meadowbrook Christian Church.
    </p>
  </div>

  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
    <Link
      href="/visit"
      className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
    >
      Plan Your Visit
    </Link>

    <Link
      href="/about"
      className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
    >
      Learn More About Meadowbrook
    </Link>
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-18 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Connect
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Join us in worship, prayer, and fellowship
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              To begin meeting people and joining in worship, prayer, and
              fellowship, you are welcome to any of our services or events.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d9d2c3] bg-[#f4efe6] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Join Us
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                You are welcome to any of our services or events as you begin
                meeting people and joining in worship, prayer, and fellowship.
              </p>
              <Link
                href="/visit"
                className="mt-6 inline-flex items-center font-semibold text-[#5c7354] hover:underline"
              >
                Go to Visit Page
              </Link>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#f4efe6] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Meet Our Leaders
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Learn more about Pastor Matt Hixson and the leaders serving
                Meadowbrook Christian Church.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center font-semibold text-[#5c7354] hover:underline"
              >
                Read About Meadowbrook
              </Link>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#f4efe6] p-6 shadow-sm">
<h3 className="text-xl font-semibold text-[#1f2937]">
  For Starters
</h3>
<p className="mt-3 text-base leading-7 text-[#4b5563]">
  If you have just begun your journey toward faith, feel free to
  reach out to any of our leaders if you have questions.
</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center font-semibold text-[#5c7354] hover:underline"
              >
                Contact Our Leaders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}