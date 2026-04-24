import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bible Study & Groups | Meadowbrook Christian Church Maryville TN",
  description:
    "Join Meadowbrook Christian Church in Maryville, Tennessee for Thursday evening discussion group at 7:00 PM. A welcoming Bible study and small group setting for questions, faith, and community.",
  alternates: {
    canonical: "/groups",
  },
};

export default function GroupsPage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Bible Study & Groups
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
              Thursday evening discussion group in Maryville
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#4b5563]">
              Meadowbrook Christian Church hosts a Thursday evening discussion
              group at 7:00 PM. It is a welcoming place to ask questions, study
              Scripture, grow in faith, and connect with others in a smaller
              setting.
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
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Thursday at 7:00 PM
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Our Thursday group meets at 7:00 PM and offers a relaxed setting
              for Bible discussion, questions, and encouragement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Open to anyone
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              You do not need to be a member to come. If you are exploring
              Christianity, returning to church, or looking for community, you
              are welcome.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Room for questions
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              This group is a helpful place to ask honest questions, think
              through Scripture, and grow alongside others.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
                What to Expect
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                A smaller setting for Bible study, discussion, and community
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Sunday morning is a great first step, but some people connect
                  more easily in a smaller setting. Thursday evening group gives
                  people space to talk, ask questions, and grow in faith
                  together.
                </p>

                <p>
                  If you are looking for a Bible study near Maryville, Tennessee
                  or a church small group near Alcoa, this is a simple way to get
                  to know Meadowbrook beyond Sunday morning.
                </p>

                <p>
                  You are welcome to come even if you are still learning,
                  uncertain, or just beginning to explore church again.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2d9c8] bg-[#f8f6f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                Group Details
              </h3>

              <div className="mt-5 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  <strong className="text-[#1f2937]">When:</strong> Thursdays at
                  7:00 PM
                </p>

                <p>
                  <strong className="text-[#1f2937]">Where:</strong> Meadowbrook
                  Christian Church, 2332 Grove St, Maryville, TN 37804
                </p>

                <p>
                  <strong className="text-[#1f2937]">Who:</strong> Open to anyone
                  who wants to study, ask questions, and grow.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Ask About Thursday Group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-[#e2d9c8] bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                Looking for a Bible study or small group in Maryville?
              </h2>

              <p className="mt-5 text-base leading-7 text-[#4b5563]">
                We would love for you to join us on Thursday evening or visit on
                Sunday morning. Meadowbrook is a small church where people can
                be known, ask real questions, and grow in faith together.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Plan Your First Visit
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
    </main>
  );
}