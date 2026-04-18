import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sermons | Meadowbrook Christian Church in Maryville, TN",
  description:
    "Watch sermons from Meadowbrook Christian Church in Maryville, Tennessee and hear Bible-based preaching from Pastor Matt Hixson.",
  alternates: {
    canonical: "/videos/sermons",
  },
};

const sermons = [
  {
    title: "What Does the Old Testament Really Teach About Slavery?",
    description:
      "Watch Pastor Matt Hixson teach through one of the most difficult questions many people have when reading the Bible and how Christians should think carefully and biblically about it.",
    href: "/videos/sermons/old-testament-slavery",
    date: "Now available",
  },
];

export default function SermonsPage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Meadowbrook Sermons
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
              Sermons from Meadowbrook Christian Church
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#4b5563]">
              Watch sermons from Meadowbrook Christian Church in Maryville,
              Tennessee. This page will continue to grow with Bible-based
              preaching and teaching from Pastor Matt Hixson.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/videos"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Back to Videos
              </Link>

              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
            Recent sermons
          </h2>

          <p className="mt-4 text-base leading-7 text-[#4b5563]">
            We are building a sermon library so guests, members, and families in
            Maryville, Alcoa, and the surrounding area can hear biblical
            teaching from Meadowbrook Christian Church online.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {sermons.map((sermon) => (
            <article
              key={sermon.title}
              className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-[#8b6f47]">{sermon.date}</p>

              <h3 className="mt-3 text-2xl font-semibold text-[#1f2937]">
                {sermon.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                {sermon.description}
              </p>

              <div className="mt-6">
                <Link
                  href={sermon.href}
                  className="inline-flex items-center font-semibold text-[#5c7354] transition hover:text-[#4f6448]"
                >
                  Watch sermon
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                Listen before you visit
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  One of the best ways to get to know a church is to hear its
                  preaching. These sermons are here to help first-time guests
                  understand what Meadowbrook teaches and what matters most in
                  our church life.
                </p>

                <p>
                  If you are looking for a Christian church in Maryville,
                  Tennessee, we hope these messages help you feel more prepared
                  and more comfortable before visiting in person.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2d9c8] bg-[#f8f6f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                Ready to visit?
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Learn service times, what to expect, and how to plan your first
                Sunday at Meadowbrook.
              </p>

              <div className="mt-6">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Visit Meadowbrook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}