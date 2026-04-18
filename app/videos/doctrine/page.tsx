import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doctrine Videos | Meadowbrook Christian Church in Maryville, TN",
  description:
    "Watch doctrine videos from Meadowbrook Christian Church in Maryville, Tennessee on core Christian beliefs, Scripture, salvation, the church, and faithful living.",
  alternates: {
    canonical: "/videos/doctrine",
  },
};

const doctrineVideos = [
  {
    title: "Doctrine Videos Coming Soon",
    description:
      "Doctrine teaching videos will be added here soon as Meadowbrook begins building its full video library.",
    href: "#",
    date: "Coming soon",
  },
];

export default function DoctrinePage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Meadowbrook Doctrine
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
              Doctrine videos from Meadowbrook Christian Church
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#4b5563]">
              Watch doctrine videos from Meadowbrook Christian Church in
              Maryville, Tennessee. This page will continue to grow with
              Bible-based teaching on core Christian beliefs and faithful
              living.
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
            Doctrine teaching
          </h2>

          <p className="mt-4 text-base leading-7 text-[#4b5563]">
            We are building this section so guests, members, and families in
            Maryville, Alcoa, and the surrounding area can explore biblical
            teaching on foundational Christian truths.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {doctrineVideos.map((video) => (
            <article
              key={video.title}
              className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-[#8b6f47]">{video.date}</p>

              <h3 className="mt-3 text-2xl font-semibold text-[#1f2937]">
                {video.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                {video.description}
              </p>

              <div className="mt-6">
                {video.href === "#" ? (
                  <span className="inline-flex items-center rounded-full bg-[#f3ede0] px-3 py-1 text-sm font-medium text-[#7a6240]">
                    Video coming soon
                  </span>
                ) : (
                  <Link
                    href={video.href}
                    className="inline-flex items-center font-semibold text-[#5c7354] transition hover:text-[#4f6448]"
                  >
                    Watch video
                  </Link>
                )}
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
                Learn what Meadowbrook teaches
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Doctrine videos will help visitors understand what Meadowbrook
                  Christian Church believes and how we approach Scripture,
                  salvation, the church, and faithful Christian living.
                </p>

                <p>
                  If you are looking for a Bible-teaching church in Maryville,
                  Tennessee, this section will become a helpful place to hear
                  clear and careful teaching on core Christian beliefs.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2d9c8] bg-[#f8f6f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                New to Meadowbrook?
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