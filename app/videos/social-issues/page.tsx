import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Christian Perspectives on Social Issues | Meadowbrook Christian Church in Maryville, TN",
  description:
    "Watch biblical teaching from Meadowbrook Christian Church in Maryville, Tennessee on important social and cultural issues from a Christian worldview.",
  alternates: {
    canonical: "/videos/social-issues",
  },
};

const socialVideos = [
  {
    title: "Social Issue Videos Coming Soon",
    description:
      "Videos addressing cultural and social issues from a biblical perspective will be added here as Meadowbrook continues building its teaching library.",
    href: "#",
    date: "Coming soon",
  },
];

export default function SocialIssuesPage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Meadowbrook Teaching
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
              Christian perspectives on social issues
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#4b5563]">
              Watch teaching from Meadowbrook Christian Church in Maryville,
              Tennessee on important social and cultural issues through a
              biblical and thoughtful Christian worldview.
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
            Biblical teaching on cultural issues
          </h2>

          <p className="mt-4 text-base leading-7 text-[#4b5563]">
            This section will grow with teaching that helps people think
            carefully, faithfully, and biblically about important questions in
            culture and society.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {socialVideos.map((video) => (
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
                Thoughtful, biblical perspective
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  These videos are intended to help people think carefully and
                  biblically about difficult or controversial topics without
                  avoiding important questions.
                </p>

                <p>
                  If you are searching for a Christian church in Maryville,
                  Tennessee that engages with Scripture seriously and speaks
                  truth with care, this section will become a helpful resource.
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