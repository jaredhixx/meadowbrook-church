import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Videos | Meadowbrook Christian Church in Maryville, TN",
  description:
    "Watch sermons, doctrine videos, and biblical perspectives on social issues from Meadowbrook Christian Church in Maryville, Tennessee.",
  alternates: {
    canonical: "/videos",
  },
};

const videoCategories = [
  {
    title: "Sermons",
    description:
      "Watch recent messages from Meadowbrook Christian Church and hear Bible-based preaching from Pastor Matt Hixson.",
    href: "/videos/sermons",
    status: "Coming soon",
  },
  {
    title: "Doctrine",
    description:
      "Explore teaching videos on core Christian beliefs, Scripture, salvation, the church, and faithful living.",
    href: "/videos/doctrine",
    status: "Coming soon",
  },
  {
    title: "Social Issues",
    description:
      "Watch biblical teaching on important cultural and social issues through a Christian worldview.",
    href: "/videos/social-issues",
    status: "Coming soon",
  },
];

export default function VideosPage() {
  return (
    <main className="bg-[#f8f6f1]">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Meadowbrook Video Library
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
              Watch sermons and biblical teaching from Meadowbrook
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#4b5563]">
              This page is where you can watch sermons, doctrine teaching, and
              videos on important social issues from Meadowbrook Christian
              Church in Maryville, Tennessee. If you want to get to know our
              church before visiting in person, this is a great place to start.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Contact Meadowbrook
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
            Video categories
          </h2>

          <p className="mt-4 text-base leading-7 text-[#4b5563]">
            We are building this library to make it easy for people in
            Maryville, Alcoa, and the surrounding area to hear biblical teaching
            and get a feel for Meadowbrook Christian Church before visiting.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videoCategories.map((category) => (
            <div
              key={category.title}
              className="flex h-full flex-col rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm"
            >
              <div className="mb-4">
                <span className="inline-flex rounded-full bg-[#f3ede0] px-3 py-1 text-sm font-medium text-[#7a6240]">
                  {category.status}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-[#1f2937]">
                {category.title}
              </h3>

              <p className="mt-4 flex-1 text-base leading-7 text-[#4b5563]">
                {category.description}
              </p>

              <div className="mt-6">
                <Link
                  href={category.href}
                  className="inline-flex items-center font-semibold text-[#5c7354] transition hover:text-[#4f6448]"
                >
                  View {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                Why this page matters
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Watching a sermon or teaching video can help you get to know
                  our church before you ever walk through the door. You can hear
                  Pastor Matt, understand our teaching style, and see whether
                  Meadowbrook feels like a place where your family can grow.
                </p>

                <p>
                  We want this page to be helpful for church members, first-time
                  guests, and anyone looking for a Christian church in
                  Maryville, Tennessee that takes Scripture seriously and cares
                  deeply about people.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2d9c8] bg-[#f8f6f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                New to Meadowbrook?
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Learn what to expect on a Sunday morning, find service times,
                and get the information you need before your first visit.
              </p>

              <div className="mt-6">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Visit Our Church in Maryville
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}